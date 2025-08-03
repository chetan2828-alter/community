import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Dimensions, 
  Animated 
} from 'react-native';
import { Linking } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { 
  fontSize, 
  isSmallDevice, 
  spacing, 
  borderRadius, 
  shadowStyles 
} from '../../utils/responsiveHelper';

const { width: screenWidth } = Dimensions.get('window');

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('http://192.168.1.116:3000/banner');
        const data = await response.json();
        if (Array.isArray(data)) {
          setBanners(data);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % banners.length;
        setCurrentIndex(nextIndex);
        flatListRef.current?.scrollToIndex({ 
          index: nextIndex, 
          animated: true 
        });
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [banners, currentIndex]);

  const handleBannerPress = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => 
        console.error('Error opening URL:', err)
      );
    }
  };

  const onScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (screenWidth - wp('8%')));
    setCurrentIndex(index);
  };

  const renderBanner = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.bannerContainer} 
      onPress={() => handleBannerPress(item.websiteUrl)}
      activeOpacity={0.9}
    >
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.bannerImage} 
        resizeMode="cover" 
      />
      <View style={styles.textOverlay}>
        <Text style={styles.headline}>{item.headline}</Text>
      </View>
      <View style={styles.carouselCounter}>
        <Text style={styles.counterText}>
          {index + 1}/{banners.length}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (banners.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>No banners available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        keyExtractor={(item, index) => `banner-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderBanner}
        onMomentumScrollEnd={onScrollEnd}
        snapToInterval={screenWidth - wp('8%')}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: wp('4%') }}
      />
      
      {/* Pagination Dots */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('2.5%'),
    alignItems: 'center',
  },
  bannerContainer: {
    width: screenWidth - wp('8%'),
    height: hp(isSmallDevice ? '25%' : '28%'),
    borderRadius: borderRadius.xl,
    backgroundColor: '#ffffff',
    ...shadowStyles.medium,
    overflow: 'hidden',
    marginHorizontal: wp('2%'),
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.xl,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: spacing.md,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  headline: {
    color: '#ffffff',
    fontSize: fontSize(18, 16, 18, 20),
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  carouselCounter: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: spacing.sm,
    paddingVertical: hp('0.5%'),
    borderRadius: borderRadius.lg,
  },
  counterText: {
    color: '#ffffff',
    fontSize: fontSize(12, 11, 12, 13),
    fontWeight: '700',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: hp('1.5%'),
    alignItems: 'center',
  },
  paginationDot: {
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    backgroundColor: '#dee2e6',
    marginHorizontal: wp('1%'),
  },
  paginationDotActive: {
    backgroundColor: '#212529',
    width: wp('6%'),
  },
  noDataText: {
    textAlign: 'center',
    color: '#6c757d',
    fontSize: fontSize(16, 15, 16, 17),
    marginTop: hp('3%'),
    fontStyle: 'italic',
  },
});

export default Banner;