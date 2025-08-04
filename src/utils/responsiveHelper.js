import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Screen size breakpoints
export const isPixel2 = screenWidth <= 415;
export const isSmallDevice = screenWidth <= 480;
export const isMediumDevice = screenWidth > 480 && screenWidth < 768;
export const isLargeDevice = screenWidth >= 768;
export const isTablet = screenWidth >= 768;

// Responsive font scaling
export const fontSize = (size) => {
  const scale = screenWidth / 375; // Base on iPhone 6/7/8 width
  const newSize = size * scale;
  
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  
  if (isPixel2) return Math.round(newSize * 0.85);
  if (isSmallDevice) return Math.round(newSize * 0.9);
  if (isLargeDevice) return Math.round(newSize * 1.1);
  return Math.round(newSize);
};

// Responsive width scaling
export const scaleWidth = (size) => {
  return (screenWidth / 375) * size;
};

// Responsive height scaling
export const scaleHeight = (size) => {
  return (screenHeight / 812) * size;
};

// Get responsive dimensions
export const getResponsiveDimensions = () => ({
  screenWidth,
  screenHeight,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  isTablet,
});

// Responsive spacing
export const spacing = {
  xs: wp('1%'),
  sm: wp('2%'),
  md: wp('4%'),
  lg: wp('6%'),
  xl: wp('8%'),
};

// Responsive border radius
export const borderRadius = {
  sm: wp('2%'),
  md: wp('3%'),
  lg: wp('4%'),
  xl: wp('6%'),
};
