import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { wp, colors, iconSize } from '../../utils/responsiveHelper';
import styles from './PostCardStyles';

const PostCard = ({ activeCategory }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const navigation = useNavigation();
  const videoRefs = useRef({});

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
      fetchPosts(true); // Refresh posts
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

  const renderPost = ({ item, index }) => {
    const hasImages = item.imageUrl && item.imageUrl.length > 0;
    const hasVideo = item.videoUrl;
    const isCurrentVideo = currentVideoIndex === index;

    return (
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: item.uploaderImageUrl || 'https://randomuser.me/api/portraits/men/1.jpg',
            }}
            style={styles.userImage}
          />
          <Text style={styles.username} numberOfLines={1}>
            {item.uploadedBy || 'Unknown User'}
          </Text>
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
          Array.isArray(item.imageUrl) && item.imageUrl.length > 1 ? (
            <View style={styles.carouselContainer}>
              <FlatList
                data={item.imageUrl}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(img, imgIndex) => `${item.id}-${imgIndex}`}
                renderItem={({ item: imageUri }) => (
                  <Image source={{ uri: imageUri }} style={styles.carouselImage} />
                )}
                snapToInterval={wp(100) - wp(4)} // Account for card margins
                decelerationRate="fast"
              />
              <View style={styles.imageCounter}>
                <Text style={styles.counterText}>
                  1/{item.imageUrl.length}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.singleImageContainer}>
              <Image
                source={{
                  uri: Array.isArray(item.imageUrl) ? item.imageUrl[0] : item.imageUrl,
                }}
                style={styles.singleImage}
              />
            </View>
          )
        ) : null}

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleLike(item.id)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={item.liked ? 'heart' : 'heart-outline'}
              size={iconSize.lg}
              color={item.liked ? colors.danger : colors.gray[600]}
            />
            <Text style={styles.likeCount}>{item.totalLikes || 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleCommentPress(item)}
            activeOpacity={0.7}
          >
            <Ionicons 
              name="chatbubble-outline" 
              size={iconSize.md} 
              color={colors.gray[600]} 
            />
            <Text style={styles.commentCount}>{item.totalComments || 0}</Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        {item.content && (
          <Text style={styles.description} numberOfLines={3}>
            {item.content}
          </Text>
        )}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (posts.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.noPostsText}>No posts available for {activeCategory}</Text>
      </View>
    );
  }

  return (
    <FlatList
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
        />
      }
      onViewableItemsChanged={({ viewableItems }) => {
        const visibleVideoIndex = viewableItems.find(
          (item) => item.item.videoUrl
        )?.index;
        setCurrentVideoIndex(visibleVideoIndex ?? null);
      }}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
      }}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      windowSize={10}
    />
  );
};

export default PostCard;