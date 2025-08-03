import { Dimensions, Platform, PixelRatio } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Screen size breakpoints
export const isPixel2 = screenWidth <= 415;
export const isSmallDevice = screenWidth <= 480;
export const isMediumDevice = screenWidth > 480 && screenWidth < 768;
export const isLargeDevice = screenWidth >= 768;
export const isTablet = screenWidth >= 768;

// Responsive font scaling with better optimization
export const fontSize = (baseSize, smallSize, mediumSize, largeSize) => {
  if (isSmallDevice) return smallSize || baseSize * 0.9;
  if (isMediumDevice) return mediumSize || baseSize;
  if (isLargeDevice) return largeSize || baseSize * 1.1;
  return baseSize;
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

// Responsive spacing using wp/hp
export const spacing = {
  xs: wp('1%'),
  sm: wp('2%'),
  md: wp('4%'),
  lg: wp('6%'),
  xl: wp('8%'),
  xxl: wp('10%'),
};

// Responsive border radius using wp
export const borderRadius = {
  xs: wp('1%'),
  sm: wp('2%'),
  md: wp('3%'),
  lg: wp('4%'),
  xl: wp('6%'),
  xxl: wp('8%'),
};

// Responsive icon sizes
export const iconSize = {
  xs: wp('4%'),
  sm: wp('5%'),
  md: wp('6%'),
  lg: wp('7%'),
  xl: wp('8%'),
};

// Safe area padding for different devices
export const getSafeAreaPadding = () => ({
  top: Platform.OS === 'ios' ? hp('6%') : hp('4%'),
  bottom: Platform.OS === 'ios' ? hp('4%') : hp('2%'),
});

// Optimized shadow styles
export const shadowStyles = {
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.2%') },
    shadowOpacity: 0.1,
    shadowRadius: wp('1%'),
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.5%') },
    shadowOpacity: 0.15,
    shadowRadius: wp('2%'),
    elevation: 4,
  },
  heavy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('1%') },
    shadowOpacity: 0.25,
    shadowRadius: wp('3%'),
    elevation: 8,
  },
};