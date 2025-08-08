import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  colors, spacing, borderRadius, typography, iconSize, 
  shadows, layout, wp, hp 
} from '../../utils/responsiveHelper';
import { addComment } from '../../utils/addComment';
import { deleteComment } from '../../utils/deleteComment';
import styles from './CommentPageStyles';

const CommentsPage = ({ route }) => {
  const navigation = useNavigation();
  const { comments: initialComments = [], postId, postUploaderId } = route.params;
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserId = async () => {
      const storedId = await AsyncStorage.getItem('userId');
      setUserId(parseInt(storedId));
    };
    fetchUserId();
    setComments(
      initialComments.map((c, i) => ({
        ...c,
        _key: c.commentId?.toString() || `init-${i}`,
      }))
    );
  }, [initialComments]);

  const handleSubmitComment = async () => {
    if (!commentText.trim()) return;
    
    setLoading(true);
    try {
      const newComment = await addComment(postId, userId, commentText);
      const generatedKey = `temp-${Date.now()}`;
      
      setComments((prev) => [
        ...prev,
        {
          ...newComment,
          commenterName: 'You',
          commenterId: userId,
          commenterImageUrl: null,
          commentedAt: new Date().toISOString(),
          text: commentText,
          _key: generatedKey,
        },
      ]);
      setCommentText('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add comment. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = (commentId) => {
    Alert.alert(
      'Delete Comment', 
      'Are you sure you want to delete this comment?', 
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteComment(commentId);
              setComments((prev) => prev.filter((c) => c.commentId !== commentId));
            } catch (error) {
              Alert.alert('Error', 'You are not authorized to delete this comment');
            }
          },
        },
      ]
    );
  };

  const formatTime = (timestamp) => {
    const diffMs = Date.now() - new Date(timestamp).getTime();
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffMin < 1) return 'now';
    if (diffMin < 60) return `${diffMin}m`;
    if (diffHr < 24) return `${diffHr}h`;
    return `${diffDay}d`;
  };

  const renderComment = ({ item }) => {
    const isCurrentUser = item.commenterId === userId;
    const profileImage = item.commenterImageUrl || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg';

    return (
      <View style={styles.commentContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={{ uri: profileImage }} style={styles.avatar} />
        </TouchableOpacity>
        
        <View style={styles.commentContent}>
          <View style={styles.commentBubble}>
            <Text style={styles.username}>
              {isCurrentUser ? 'You' : item.commenterName || 'Anonymous'}
            </Text>
            <Text style={styles.commentText}>{item.text || '(No text)'}</Text>
          </View>
          
          <View style={styles.commentActions}>
            <Text style={styles.timestamp}>{formatTime(item.commentedAt)}</Text>
            <TouchableOpacity style={styles.replyButton}>
              <Text style={styles.replyText}>Reply</Text>
            </TouchableOpacity>
            {isCurrentUser && (
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => handleDeleteComment(item.commentId)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={iconSize.sm} color={colors.text.tertiary} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={iconSize.lg} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Comments List */}
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item._key}
        contentContainerStyle={styles.commentsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Ionicons name="chatbubble-outline" size={iconSize.xxl * 2} color={colors.text.tertiary} />
            <Text style={styles.emptyText}>No comments yet</Text>
            <Text style={styles.emptySubtext}>Be the first to comment</Text>
          </View>
        )}
      />

      {/* Input Container */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TouchableOpacity style={styles.emojiButton}>
              <Ionicons name="happy-outline" size={iconSize.md} color={colors.text.tertiary} />
            </TouchableOpacity>
            
            <TextInput
              value={commentText}
              onChangeText={setCommentText}
              placeholder="Add a comment..."
              placeholderTextColor={colors.text.tertiary}
              style={styles.textInput}
              multiline
              maxLength={500}
            />
            
            <TouchableOpacity 
              style={[
                styles.sendButton,
                (!commentText.trim() || loading) && styles.sendButtonDisabled
              ]}
              onPress={handleSubmitComment}
              disabled={!commentText.trim() || loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Ionicons name="send" size={iconSize.sm} color={colors.white} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommentsPage;