import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Device categorization for precise responsive design
export const isSmallDevice = screenWidth < 375; // iPhone SE, small Android
export const isMediumDevice = screenWidth >= 375 && screenWidth < 414; // iPhone 12/13/14
export const isLargeDevice = screenWidth >= 414 && screenWidth < 428; // iPhone 12/13/14 Pro
export const isExtraLargeDevice = screenWidth >= 428; // iPhone 14 Pro Max+
export const isTablet = screenWidth >= 768;

// Base dimensions (iPhone 14 Pro as reference - 393x852)
const baseWidth = 393;
const baseHeight = 852;

// Professional responsive scaling
export const wp = (percentage) => {
  const value = (percentage * screenWidth) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

export const hp = (percentage) => {
  const value = (percentage * screenHeight) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

// iOS-style font scaling with optical sizing
export const fontSize = (size) => {
  const scale = screenWidth / baseWidth;
  let newSize = size * scale;
  
  // Device-specific optical adjustments
  if (isSmallDevice) {
    newSize = newSize * 0.92;
  } else if (isExtraLargeDevice) {
    newSize = newSize * 1.03;
  }
  
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Professional spacing system (4px base grid)
export const spacing = {
  xs: wp(1),     // 4px
  sm: wp(2),     // 8px  
  md: wp(3),     // 12px
  lg: wp(4),     // 16px
  xl: wp(5),     // 20px
  xxl: wp(6),    // 24px
  xxxl: wp(8),   // 32px
  xxxxl: wp(10), // 40px
};

// iOS-style border radius system
export const borderRadius = {
  xs: wp(1),     // 4px
  sm: wp(2),     // 8px
  md: wp(3),     // 12px
  lg: wp(4),     // 16px
  xl: wp(5),     // 20px
  xxl: wp(6),    // 24px
  xxxl: wp(8),   // 32px
  round: wp(50), // Circular
};

// Professional icon sizing
export const iconSize = {
  xs: fontSize(14),
  sm: fontSize(16),
  md: fontSize(20),
  lg: fontSize(24),
  xl: fontSize(28),
  xxl: fontSize(32),
};

// iOS-style safe area calculations
export const getSafeAreaTop = () => {
  if (Platform.OS === 'ios') {
    if (screenHeight >= 812) return hp(6.5); // iPhone X and newer
    return hp(3.5); // Older iPhones
  }
  return hp(4.5); // Android
};

export const getSafeAreaBottom = () => {
  if (Platform.OS === 'ios') {
    if (screenHeight >= 812) return hp(4.5); // iPhone X and newer
    return hp(2.5); // Older iPhones
  }
  return hp(3); // Android
};

// Professional shadow system (iOS-style)
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.1) },
    shadowOpacity: 0.05,
    shadowRadius: wp(0.5),
    elevation: 1,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.2) },
    shadowOpacity: 0.08,
    shadowRadius: wp(1),
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.4) },
    shadowOpacity: 0.12,
    shadowRadius: wp(2),
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.8) },
    shadowOpacity: 0.16,
    shadowRadius: wp(3),
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(1.2) },
    shadowOpacity: 0.2,
    shadowRadius: wp(4),
    elevation: 12,
  },
};

// Professional typography scale (iOS San Francisco inspired)
export const typography = {
  largeTitle: fontSize(34),
  title1: fontSize(28),
  title2: fontSize(22),
  title3: fontSize(20),
  headline: fontSize(17),
  body: fontSize(17),
  callout: fontSize(16),
  subhead: fontSize(15),
  footnote: fontSize(13),
  caption1: fontSize(12),
  caption2: fontSize(11),
};

// Professional color system (iOS-inspired)
export const colors = {
  // Primary brand colors
  primary: '#007AFF',
  primaryDark: '#0056CC',
  primaryLight: '#4DA2FF',
  
  // Secondary colors
  secondary: '#5856D6',
  accent: '#FF3B30',
  success: '#34C759',
  warning: '#FF9500',
  danger: '#FF3B30',
  info: '#007AFF',
  
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Gray scale (iOS system grays)
  gray: {
    50: '#F9F9F9',
    100: '#F2F2F7',
    200: '#E5E5EA',
    300: '#D1D1D6',
    400: '#C7C7CC',
    500: '#AEAEB2',
    600: '#8E8E93',
    700: '#636366',
    800: '#48484A',
    900: '#1C1C1E',
  },
  
  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F7',
    tertiary: '#FFFFFF',
    grouped: '#F2F2F7',
  },
  
  // Text colors
  text: {
    primary: '#000000',
    secondary: '#3C3C43',
    tertiary: '#3C3C4399',
    quaternary: '#3C3C432E',
  },
  
  // Separator colors
  separator: {
    opaque: '#C6C6C8',
    nonOpaque: '#3C3C4349',
  },
  
  // Fill colors
  fill: {
    primary: '#78788033',
    secondary: '#78788028',
    tertiary: '#7676801E',
    quaternary: '#74748014',
  },
};

// Professional button styles
export const buttonStyles = {
  primary: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    ...shadows.sm,
  },
  secondary: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.separator.opaque,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
};

// Professional input styles
export const inputStyles = {
  default: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    fontSize: typography.body,
    color: colors.text.primary,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
  },
  focused: {
    borderColor: colors.primary,
    backgroundColor: colors.white,
    ...shadows.sm,
  },
};

// Card styles for consistent design
export const cardStyles = {
  default: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.lg,
    ...shadows.md,
  },
  elevated: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    marginVertical: spacing.md,
    marginHorizontal: spacing.lg,
    ...shadows.lg,
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
  platform: Platform.OS,
});

// Professional animation timings
export const animations = {
  fast: 200,
  normal: 300,
  slow: 500,
  spring: {
    damping: 15,
    stiffness: 150,
  },
};

// Professional layout constants
export const layout = {
  headerHeight: hp(12),
  tabBarHeight: hp(10),
  buttonHeight: hp(6),
  inputHeight: hp(6),
  cardMinHeight: hp(15),
  avatarSizes: {
    xs: wp(6),
    sm: wp(8),
    md: wp(12),
    lg: wp(16),
    xl: wp(20),
  },
};