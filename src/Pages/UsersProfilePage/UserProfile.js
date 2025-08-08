import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Alert,
  Modal,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  colors, spacing, borderRadius, typography, iconSize, 
  shadows, layout, wp, hp 
} from '../../utils/responsiveHelper';
import styles from './UserProfileStyles';

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

const UserProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFamilyTree, setShowFamilyTree] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        Alert.alert('Error', 'Please login to view profiles');
        navigation.goBack();
        return;
      }

      const response = await fetch(`http://192.168.1.116:8080/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      Alert.alert('Error', 'Failed to load user profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  const handleSendMessage = () => {
    Alert.alert('Feature Coming Soon', 'Messaging feature will be available soon!');
  };

  const handleSendInterest = () => {
    Alert.alert('Interest Sent', 'Your interest has been sent successfully!');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="person-outline" size={iconSize.xxl * 2} color={colors.text.tertiary} />
        <Text style={styles.errorText}>Profile not found</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchUserDetails}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const {
    firstName,
    lastName,
    gender,
    maritalStatus,
    dob,
    height,
    weight,
    bloodGroup,
    fatherName,
    motherName,
    address,
    emergencyContact,
  } = user;

  const age = calculateAge(dob);
  const fullName = `${firstName || ''} ${lastName || ''}`.trim();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={iconSize.lg} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={iconSize.lg} color={colors.white} />
        </TouchableOpacity>
      </View>

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
                uri: user.profileImageUrl || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" 
              }}
              style={styles.avatar}
            />
            <View style={styles.verifiedBadge}>
              <MaterialIcons name="verified" size={iconSize.md} color={colors.white} />
            </View>
          </View>

          <Text style={styles.name}>{fullName || 'Unknown User'}</Text>
          
          <View style={styles.basicInfo}>
            <Text style={styles.ageText}>{age} years old</Text>
            {gender && <Text style={styles.genderText}>• {gender}</Text>}
            }
            {maritalStatus && <Text style={styles.statusText}>• {maritalStatus}</Text>}
            }
          </View>

          <View style={styles.communityBadge}>
            <Text style={styles.communityText}>Shree Halari Visa Samaj</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.primaryActionButton}
              onPress={handleSendInterest}
            >
              <Feather name="heart" size={iconSize.md} color={colors.white} />
              <Text style={styles.primaryActionText}>Send Interest</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.secondaryActionButton}
              onPress={handleSendMessage}
            >
              <Ionicons name="chatbubble-outline" size={iconSize.md} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Personal Information</Text>
          <View style={styles.infoGrid}>
            {height && <InfoRow icon="resize-outline" label="Height" value={`${height} ft`} />}
            {weight && <InfoRow icon="fitness-outline" label="Weight" value={`${weight} kg`} />}
            {bloodGroup && <InfoRow icon="water-outline" label="Blood Group" value={bloodGroup} />}
            {address && <InfoRow icon="location-outline" label="Location" value={address} />}
            {emergencyContact && <InfoRow icon="call-outline" label="Emergency Contact" value={emergencyContact} />}
          </View>
        </View>

        {/* Family Information */}
        {(fatherName || motherName) && (
          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Family Details</Text>
              <TouchableOpacity 
                style={styles.familyTreeButton}
                onPress={() => setShowFamilyTree(true)}
              >
                <MaterialIcons name="account-tree" size={iconSize.md} color={colors.primary} />
                <Text style={styles.familyTreeText}>Family Tree</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.infoGrid}>
              {fatherName && <InfoRow icon="man-outline" label="Father" value={fatherName} />}
              {motherName && <InfoRow icon="woman-outline" label="Mother" value={motherName} />}
            </View>
          </View>
        )}

        {/* About Section */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.aboutText}>
            {`${fullName} is a ${age}-year-old ${gender?.toLowerCase()} from the Halari Visa Samaj community. 
            ${maritalStatus ? `Currently ${maritalStatus?.toLowerCase()}.` : ''} 
            Looking to connect with like-minded individuals from the community.`}
          </Text>
        </View>
      </ScrollView>

      {/* Family Tree Modal */}
      <Modal
        visible={showFamilyTree}
        transparent
        animationType="fade"
        onRequestClose={() => setShowFamilyTree(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Family Tree</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setShowFamilyTree(false)}
              >
                <Ionicons name="close" size={iconSize.lg} color={colors.text.primary} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.treeContainer}>
              <View style={styles.treeLevel}>
                <TreeNode label="Grandfather" />
                <TreeNode label="Grandmother" />
              </View>
              
              <View style={styles.treeConnector} />
              
              <View style={styles.treeLevel}>
                <TreeNode label={fatherName || "Father"} highlighted />
                <TreeNode label={motherName || "Mother"} highlighted />
              </View>
              
              <View style={styles.treeConnector} />
              
              <View style={styles.treeLevel}>
                <TreeNode label={fullName || "User"} current />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <View style={styles.infoRow}>
    <View style={styles.infoIcon}>
      <Ionicons name={icon} size={iconSize.sm} color={colors.text.tertiary} />
    </View>
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const TreeNode = ({ label, highlighted, current }) => (
  <View style={[
    styles.treeNode,
    highlighted && styles.treeNodeHighlighted,
    current && styles.treeNodeCurrent
  ]}>
    <Text style={[
      styles.treeNodeText,
      highlighted && styles.treeNodeTextHighlighted,
      current && styles.treeNodeTextCurrent
    ]}>
      {label}
    </Text>
  </View>
);

export default UserProfile;