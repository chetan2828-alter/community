import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { 
  colors, spacing, borderRadius, typography, iconSize, 
  shadows, layout, wp, hp 
} from '../../utils/responsiveHelper';
import styles from './ProfileStyles';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');
  const navigation = useNavigation();
  const { logout } = useAuth();

  useEffect(() => {
    fetchUserProfile();
    fetchUserPosts();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token || !userId) return;

      const response = await fetch(`http://192.168.1.116:8080/api/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token || !userId) return;

      const response = await fetch(`http://192.168.1.116:8080/api/users/posts/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserPosts(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await Promise.all([fetchUserProfile(), fetchUserPosts()]);
    setRefreshing(false);
  };

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            await logout();
            navigation.reset({
              index: 0,
              routes: [{ name: 'FirstPage' }],
            });
          },
        },
      ]
    );
  };

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log('Edit profile pressed');
  };

  const calculateAge = (dobString) => {
    if (!dobString) return 'N/A';
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={iconSize.md} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: userProfile?.profileImageUrl || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={iconSize.sm} color={colors.white} />
            </TouchableOpacity>
          </View>

          <Text style={styles.displayName}>
            {userProfile ? `${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim() : 'User Name'}
          </Text>
          
          {userProfile?.dob && (
            <Text style={styles.ageText}>
              {calculateAge(userProfile.dob)} years old
            </Text>
          )}

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userPosts.length}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Details */}
        {userProfile && (
          <View style={styles.detailsCard}>
            <Text style={styles.cardTitle}>About</Text>
            
            <View style={styles.detailsGrid}>
              {userProfile.gender && (
                <DetailRow icon="person-outline" label="Gender" value={userProfile.gender} />
              )}
              {userProfile.maritalStatus && (
                <DetailRow icon="heart-outline" label="Status" value={userProfile.maritalStatus} />
              )}
              {userProfile.height && (
                <DetailRow icon="resize-outline" label="Height" value={`${userProfile.height} ft`} />
              )}
              {userProfile.bloodGroup && (
                <DetailRow icon="water-outline" label="Blood Group" value={userProfile.bloodGroup} />
              )}
              {userProfile.address && (
                <DetailRow icon="location-outline" label="Location" value={userProfile.address} />
              )}
            </View>
          </View>
        )}

        {/* Family Details */}
        {userProfile && (userProfile.fatherName || userProfile.motherName) && (
          <View style={styles.detailsCard}>
            <Text style={styles.cardTitle}>Family</Text>
            
            <View style={styles.detailsGrid}>
              {userProfile.fatherName && (
                <DetailRow icon="man-outline" label="Father" value={userProfile.fatherName} />
              )}
              {userProfile.motherName && (
                <DetailRow icon="woman-outline" label="Mother" value={userProfile.motherName} />
              )}
              {userProfile.emergencyContact && (
                <DetailRow icon="call-outline" label="Emergency Contact" value={userProfile.emergencyContact} />
              )}
            </View>
          </View>
        )}

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
            onPress={() => setActiveTab('posts')}
          >
            <Ionicons 
              name="grid-outline" 
              size={iconSize.md} 
              color={activeTab === 'posts' ? colors.primary : colors.text.tertiary} 
            />
            <Text style={[
              styles.tabText,
              activeTab === 'posts' && styles.activeTabText
            ]}>
              Posts
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
            onPress={() => setActiveTab('saved')}
          >
            <Ionicons 
              name="bookmark-outline" 
              size={iconSize.md} 
              color={activeTab === 'saved' ? colors.primary : colors.text.tertiary} 
            />
            <Text style={[
              styles.tabText,
              activeTab === 'saved' && styles.activeTabText
            ]}>
              Saved
            </Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <View style={styles.postsGrid}>
          {userPosts.length > 0 ? (
            userPosts.map((post, index) => (
              <TouchableOpacity key={post.id || index} style={styles.postThumbnail}>
                <Image
                  source={{ uri: post.imageUrl?.[0] || post.imageUrl }}
                  style={styles.postImage}
                />
                {Array.isArray(post.imageUrl) && post.imageUrl.length > 1 && (
                  <View style={styles.multipleImagesIndicator}>
                    <Ionicons name="copy-outline" size={iconSize.sm} color={colors.white} />
                  </View>
                )}
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noPostsContainer}>
              <Ionicons name="camera-outline" size={iconSize.xxl * 2} color={colors.text.tertiary} />
              <Text style={styles.noPostsText}>No posts yet</Text>
              <Text style={styles.noPostsSubtext}>Share your first post to get started</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <View style={styles.detailRow}>
    <View style={styles.detailIcon}>
      <Ionicons name={icon} size={iconSize.sm} color={colors.text.tertiary} />
    </View>
    <View style={styles.detailContent}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  </View>
);

export default Profile;