import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Animated,
  Dimensions,
} from 'react-native';
import { Video } from 'expo-av';
import { Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { wp, colors, iconSize, spacing } from '../../utils/responsiveHelper';
import styles from './PostCardStyles';

const { width: screenWidth } = Dimensions.get('window');

const PostCard = ({ activeCategory }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const navigation = useNavigation();
  const videoRefs = useRef({});
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchPosts();
  }, [activeCategory]);

  const fetchPosts = async (isRefresh = false) => {
    try {
      if (!isRefresh) setLoading(true);
      const token = await AsyncStorage.getItem('token');
      
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await fetch(
        `http://192.168.1.116:8080/api/users/getUploaded-post/${activeCategory}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts(true);
  };

  const handleLike = async (postId) => {
    try {
      const token = await AsyncStorage.getItem('token');
      await fetch(`http://192.168.1.116:8080/api/users/like/${postId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Optimistic update
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { 
                ...post, 
                liked: !post.liked, 
                totalLikes: post.liked ? post.totalLikes - 1 : post.totalLikes + 1 
              }
            : post
        )
      );
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleCommentPress = (post) => {
    navigation.navigate('commentpage', {
      comments: post.comments || [],
      postId: post.id,
      postUploaderId: post.postUploaderId,
    });
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now - postTime) / 1000);
    
    if (diffInSeconds < 60) return 'now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`;
    return `${Math.floor(diffInSeconds / 604800)}w`;
  };

  const renderPost = ({ item, index }) => {
    const hasImages = item.imageUrl && item.imageUrl.length > 0;
    const hasVideo = item.videoUrl;
    const isCurrentVideo = currentVideoIndex === index;
    const imageArray = Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl];

    return (
      <Animated.View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.userInfo}
            onPress={() => navigation.navigate('userprofile', { userId: item.postUploaderId })}
            activeOpacity={0.7}
          >
            <Image
              source={{
                uri: item.uploaderImageUrl || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
              }}
              style={styles.userImage}
            />
            <View style={styles.userDetails}>
              <Text style={styles.username} numberOfLines={1}>
                {item.uploadedBy || 'Unknown User'}
              </Text>
              <Text style={styles.timestamp}>
                {formatTimeAgo(item.uploadedAt)}
              </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.moreButton} activeOpacity={0.6}>
            <Ionicons name="ellipsis-horizontal" size={iconSize.md} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        {/* Media Content */}
        {hasVideo ? (
          <View style={styles.videoContainer}>
            <Video
              ref={(ref) => (videoRefs.current[index] = ref)}
              source={{ uri: item.videoUrl }}
              style={styles.video}
              shouldPlay={isCurrentVideo}
              isLooping
              isMuted={isMuted}
              resizeMode="cover"
              onPlaybackStatusUpdate={(status) => {
                if (status.isLoaded && !status.isPlaying && isCurrentVideo) {
                  videoRefs.current[index]?.playAsync();
                }
              }}
            />
            <TouchableOpacity
              style={styles.muteButton}
              onPress={() => setIsMuted(!isMuted)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={isMuted ? 'volume-mute' : 'volume-high'}
                size={iconSize.md}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        ) : hasImages ? (
          imageArray.length > 1 ? (
            <View style={styles.carouselContainer}>
              <FlatList
                data={imageArray}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(img, imgIndex) => `${item.id}-${imgIndex}`}
                renderItem={({ item: imageUri }) => (
                  <Image source={{ uri: imageUri }} style={styles.carouselImage} />
                )}
                snapToInterval={screenWidth - (spacing.lg * 2)}
                decelerationRate="fast"
              />
              <View style={styles.imageCounter}>
                <Text style={styles.counterText}>
                  1/{imageArray.length}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.singleImageContainer}>
              <Image
                source={{ uri: imageArray[0] }}
                style={styles.singleImage}
              />
            </View>
          )
        ) : null}

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, item.liked && styles.likeButtonActive]}
            onPress={() => handleLike(item.id)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={item.liked ? 'heart' : 'heart-outline'}
              size={iconSize.lg}
              color={item.liked ? colors.danger : colors.text.secondary}
            />
            {item.totalLikes > 0 && (
              <Text style={styles.likeCount}>{item.totalLikes}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.commentButton]}
            onPress={() => handleCommentPress(item)}
            activeOpacity={0.7}
          >
            <Ionicons 
              name="chatbubble-outline" 
              size={iconSize.md} 
              color={colors.text.secondary} 
            />
            {item.totalComments > 0 && (
              <Text style={styles.commentCount}>{item.totalComments}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.shareButton]}
            activeOpacity={0.7}
          >
            <Feather 
              name="send" 
              size={iconSize.md} 
              color={colors.text.secondary} 
            />
          </TouchableOpacity>
        </View>

        {/* Engagement info */}
        {(item.totalLikes > 0 || item.totalComments > 0) && (
          <View style={styles.engagementRow}>
            {item.totalLikes > 0 && (
              <Text style={styles.engagementText}>
                {item.totalLikes} {item.totalLikes === 1 ? 'like' : 'likes'}
              </Text>
            )}
            {item.totalComments > 0 && (
              <TouchableOpacity onPress={() => handleCommentPress(item)}>
                <Text style={styles.viewComments}>
                  View all {item.totalComments} comments
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Description */}
        {item.content && (
          <View style={styles.contentSection}>
            <Text style={styles.description} numberOfLines={3}>
              <Text style={styles.usernameInContent}>{item.uploadedBy}</Text>
              {' '}{item.content}
            </Text>
          </View>
        )}
      </Animated.View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading posts...</Text>
      </View>
    );
  }

  if (posts.length === 0) {
    return (
      <View style={styles.noPostsContainer}>
        <Ionicons name="images-outline" size={iconSize.xxl * 2} color={colors.text.tertiary} />
        <Text style={styles.noPostsText}>No posts yet</Text>
        <Text style={styles.noPostsSubtext}>
          Be the first to share something in {activeCategory}
        </Text>
      </View>
    );
  }

  return (
    <Animated.FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderPost}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
          progressBackgroundColor={colors.white}
        />
      }
      onViewableItemsChanged={({ viewableItems }) => {
        const visibleVideoIndex = viewableItems.find(
          (item) => item.item.videoUrl
        )?.index;
        setCurrentVideoIndex(visibleVideoIndex ?? null);
      }}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 60,
      }}
      removeClippedSubviews={true}
      maxToRenderPerBatch={3}
      windowSize={5}
      initialNumToRender={2}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    />
  );
};

export default PostCard;