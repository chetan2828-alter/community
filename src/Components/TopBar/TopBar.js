import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RectangleCard from '../RectangleCard/RectangleCard';
import { useNavigation } from "@react-navigation/native";
import { iconSize, colors } from '../../utils/responsiveHelper';
import styles from './TopBarStyles';

const TopBar = ({ profileImage, onMessagePress, activeCategory, setActiveCategory }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  const handleNotificationPress = () => {
    // Handle notification press
    console.log('Notifications pressed');
  };

  const handleMessagePress = () => {
    // Handle message press
    console.log('Messages pressed');
    if (onMessagePress) onMessagePress();
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>Community</Text>
      </View>

      {/* Profile + Icons Row */}
      <View style={styles.topRow}>
        <TouchableOpacity 
          style={styles.profileContainer} 
          onPress={handleProfilePress}
          activeOpacity={0.8}
        >
          <Image
            source={{ 
              uri: profileImage || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg' 
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View style={styles.iconGroup}>
          <TouchableOpacity 
            style={styles.iconContainer}
            onPress={handleNotificationPress}
            activeOpacity={0.6}
          >
            <Ionicons 
              name="notifications-outline" 
              size={iconSize.md} 
              color={colors.text.primary} 
            />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.iconContainer}
            onPress={handleMessagePress}
            activeOpacity={0.6}
          >
            <Ionicons 
              name="chatbubble-outline" 
              size={iconSize.md} 
              color={colors.text.primary} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Selection */}
      <RectangleCard 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
    </View>
  );
};

export default TopBar;