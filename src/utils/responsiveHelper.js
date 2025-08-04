import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Device categorization based on actual device specs
export const isSmallDevice = screenWidth < 375; // iPhone SE, small Android
export const isMediumDevice = screenWidth >= 375 && screenWidth < 414; // iPhone 12/13/14
export const isLargeDevice = screenWidth >= 414 && screenWidth < 428; // iPhone 12/13/14 Pro
export const isExtraLargeDevice = screenWidth >= 428; // iPhone 14 Pro Max, large Android
export const isTablet = screenWidth >= 768;

// Base dimensions (iPhone 12 Pro as reference)
const baseWidth = 390;
const baseHeight = 844;

// Responsive scaling functions
export const wp = (percentage) => {
  const value = (percentage * screenWidth) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

export const hp = (percentage) => {
  const value = (percentage * screenHeight) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

// Font scaling with device-specific adjustments
export const fontSize = (size) => {
  const scale = screenWidth / baseWidth;
  let newSize = size * scale;
  
  // Device-specific adjustments
  if (isSmallDevice) {
    newSize = newSize * 0.9;
  } else if (isExtraLargeDevice) {
    newSize = newSize * 1.05;
  }
  
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Responsive spacing system (8px base)
export const spacing = {
  xs: wp(1),    // 4px
  sm: wp(2),    // 8px  
  md: wp(4),    // 16px
  lg: wp(6),    // 24px
  xl: wp(8),    // 32px
  xxl: wp(12),  // 48px
};

// Responsive border radius
export const borderRadius = {
  xs: wp(1),    // 4px
  sm: wp(2),    // 8px
  md: wp(3),    // 12px
  lg: wp(4),    // 16px
  xl: wp(6),    // 24px
  xxl: wp(8),   // 32px
  round: wp(50), // Circular
};

// Icon sizes
export const iconSize = {
  xs: fontSize(12),
  sm: fontSize(16),
  md: fontSize(20),
  lg: fontSize(24),
  xl: fontSize(28),
  xxl: fontSize(32),
};

// Safe area calculations
export const getSafeAreaTop = () => {
  if (Platform.OS === 'ios') {
    if (screenHeight >= 812) return hp(6); // iPhone X and newer
    return hp(3); // Older iPhones
  }
  return hp(4); // Android
};

export const getSafeAreaBottom = () => {
  if (Platform.OS === 'ios') {
    if (screenHeight >= 812) return hp(4); // iPhone X and newer
    return hp(2); // Older iPhones
  }
  return hp(2); // Android
};

// Shadow presets
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.25) },
    shadowOpacity: 0.1,
    shadowRadius: wp(1),
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.5) },
    shadowOpacity: 0.15,
    shadowRadius: wp(2),
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(1) },
    shadowOpacity: 0.2,
    shadowRadius: wp(3),
    elevation: 8,
  },
};

// Typography scale
export const typography = {
  h1: fontSize(32),
  h2: fontSize(28),
  h3: fontSize(24),
  h4: fontSize(20),
  h5: fontSize(18),
  h6: fontSize(16),
  body: fontSize(14),
  caption: fontSize(12),
  small: fontSize(10),
};

// Color system
export const colors = {
  primary: '#212529',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

export const getDeviceInfo = () => ({
  screenWidth,
  screenHeight,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  isExtraLargeDevice,
  isTablet,
  pixelRatio: PixelRatio.get(),
  fontScale: PixelRatio.getFontScale(),
});