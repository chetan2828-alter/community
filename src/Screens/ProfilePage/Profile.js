import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { 
  fontSize, 
  isSmallDevice, 
  spacing, 
  borderRadius, 
  shadowStyles,
  getSafeAreaPadding 
} from '../../utils/responsiveHelper';

const Profile = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token || !userId) {
        console.error('No token or userId found');
        return;
      }

      const response = await fetch(`http://192.168.1.116:8080/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
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

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#212529" />
          <Text style={styles.loadingText}>Loading profile...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ 
                uri: userProfile?.profileImage || 'https://randomuser.me/api/portraits/men/1.jpg' 
              }}
              style={styles.avatar}
            />
            <View style={styles.verifiedBadge}>
              <MaterialIcons name="verified" size={16} color="#ffffff" />
            </View>
          </View>

          <Text style={styles.name}>
            {userProfile?.firstName || 'User'} {userProfile?.lastName || ''}
          </Text>
          <Text style={styles.subText}>
            {userProfile?.age || 'N/A'} • {userProfile?.gender || 'N/A'} • {userProfile?.address || 'Location'}
          </Text>
          
          <View style={styles.communityBadge}>
            <Text style={styles.communityText}>Shree Halari Visa Oswal</Text>
          </View>
        </View>

        {/* Profile Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Connections</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Interests</Text>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.description}>
            {userProfile?.bio || 'Family-oriented person looking for meaningful connections within our community. I value tradition, respect, and shared values.'}
          </Text>
        </View>

        {/* Personal Info */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <DetailItem label="Height" value={userProfile?.height ? `${userProfile.height} ft` : 'N/A'} />
          <DetailItem label="Weight" value={userProfile?.weight ? `${userProfile.weight} kg` : 'N/A'} />
          <DetailItem label="Blood Group" value={userProfile?.bloodGroup || 'N/A'} />
          <DetailItem label="Marital Status" value={userProfile?.maritalStatus || 'N/A'} />
        </View>

        {/* Family Info */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Family Details</Text>
          
          <DetailItem label="Father" value={userProfile?.fatherName || 'N/A'} />
          <DetailItem label="Mother" value={userProfile?.motherName || 'N/A'} />
          <DetailItem label="Emergency Contact" value={userProfile?.emergencyContact || 'N/A'} />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => console.log('Edit profile')}
            activeOpacity={0.8}
          >
            <Feather name="edit-2" size={20} color="#212529" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Ionicons name="log-out-outline" size={20} color="#dc3545" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailItem = ({ label, value }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: hp('12%'), // Account for tab bar
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: hp('2%'),
    fontSize: fontSize(16),
    color: '#6c757d',
  },
  profileHeader: {
    alignItems: 'center',
    padding: spacing.xl,
    paddingBottom: spacing.lg,
    backgroundColor: '#ffffff',
    marginBottom: hp('2%'),
    ...shadowStyles.light,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: hp('2%'),
  },
  avatar: {
    width: wp(isSmallDevice ? '30%' : '28%'),
    height: wp(isSmallDevice ? '30%' : '28%'),
    borderRadius: wp('15%'),
    borderWidth: 3,
    borderColor: '#212529',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: wp('1%'),
    right: wp('1%'),
    backgroundColor: '#28a745',
    borderRadius: wp('3%'),
    width: wp('6%'),
    height: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: fontSize(26, 24, 26, 28),
    fontWeight: '800',
    color: '#212529',
    marginBottom: hp('0.8%'),
    textAlign: 'center',
  },
  subText: {
    fontSize: fontSize(15, 14, 15, 16),
    color: '#6c757d',
    marginBottom: hp('2%'),
    textAlign: 'center',
    fontWeight: '500',
  },
  communityBadge: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: spacing.lg,
    paddingVertical: hp('1%'),
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  communityText: {
    fontSize: fontSize(13, 12, 13, 14),
    color: '#212529',
    fontWeight: '600',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: spacing.md,
    marginBottom: hp('2%'),
    borderRadius: borderRadius.lg,
    paddingVertical: hp('2%'),
    ...shadowStyles.light,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: fontSize(24, 22, 24, 26),
    fontWeight: '800',
    color: '#212529',
  },
  statLabel: {
    fontSize: fontSize(12, 11, 12, 13),
    color: '#6c757d',
    fontWeight: '600',
    marginTop: hp('0.5%'),
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.md,
    marginBottom: hp('2%'),
    ...shadowStyles.light,
  },
  sectionTitle: {
    fontSize: fontSize(18, 17, 18, 19),
    fontWeight: '700',
    color: '#212529',
    marginBottom: hp('2%'),
  },
  description: {
    fontSize: fontSize(15, 14, 15, 16),
    color: '#495057',
    lineHeight: hp('2.8%'),
    fontWeight: '400',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('1.2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  detailLabel: {
    fontSize: fontSize(14, 13, 14, 15),
    color: '#6c757d',
    fontWeight: '600',
    flex: 1,
  },
  detailValue: {
    fontSize: fontSize(14, 13, 14, 15),
    color: '#212529',
    fontWeight: '500',
    flex: 1.5,
    textAlign: 'right',
  },
  actionButtons: {
    flexDirection: 'row',
    marginHorizontal: spacing.md,
    marginBottom: hp('2%'),
    gap: spacing.md,
  },
  editButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: hp('2%'),
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: '#212529',
    ...shadowStyles.light,
  },
  editButtonText: {
    marginLeft: spacing.sm,
    fontSize: fontSize(16, 15, 16, 17),
    fontWeight: '600',
    color: '#212529',
  },
  logoutButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: hp('2%'),
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: '#dc3545',
    ...shadowStyles.light,
  },
  logoutButtonText: {
    marginLeft: spacing.sm,
    fontSize: fontSize(16, 15, 16, 17),
    fontWeight: '600',
    color: '#dc3545',
  },
  bottomSpacer: {
    height: hp('5%'),
  },
});

export default Profile;