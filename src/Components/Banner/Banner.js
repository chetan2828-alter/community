import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  Animated,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { 
  colors, spacing, borderRadius, typography, iconSize, 
  shadows, wp, hp 
} from '../../utils/responsiveHelper';
import styles from './BannerStyles';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % banners.length;
          flatListRef.current?.scrollToIndex({ 
            index: nextIndex, 
            animated: true 
          });
          return nextIndex;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [banners]);

  const fetchBanners = async () => {
    try {
      const response = await fetch('http://192.168.1.116:3000/banner');
      const data = await response.json();
      if (Array.isArray(data)) {
        setBanners(data);
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBannerPress = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => 
        console.error('Error opening URL:', err)
      );
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const renderBanner = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.bannerContainer} 
      onPress={() => handleBannerPress(item.websiteUrl)}
      activeOpacity={0.95}
    >
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.bannerImage} 
        resizeMode="cover"
      />
      
      <View style={styles.gradientOverlay} />
      
      <View style={styles.contentOverlay}>
        <Text style={styles.headline} numberOfLines={2}>
          {item.headline}
        </Text>
      </View>
      
      <View style={styles.indexIndicator}>
        <Text style={styles.indexText}>
          {index + 1}/{banners.length}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderBanner}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={wp(100) - spacing.xl * 2}
        snapToAlignment="start"
        contentContainerStyle={styles.flatListContent}
      />
      
      {banners.length > 1 && (
        <View style={styles.pagination}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Banner;