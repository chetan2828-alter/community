import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.lg,
    position: 'relative',
  },
  
  loadingContainer: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  flatListContent: {
    paddingHorizontal: spacing.lg,
  },
  
  bannerContainer: {
    width: wp(100) - spacing.xl * 2,
    height: hp(25),
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    marginHorizontal: spacing.sm,
    position: 'relative',
    backgroundColor: colors.background.secondary,
    ...shadows.lg,
  },
  
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  
  contentOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.xl,
    justifyContent: 'flex-end',
  },
  
  headline: {
    fontSize: typography.title3,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: -0.2,
    lineHeight: typography.title3 * 1.2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  
  indexIndicator: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.xl,
    ...shadows.md,
  },
  
  indexText: {
    color: colors.white,
    fontSize: typography.caption1,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  
  paginationDot: {
    width: wp(2),
    height: wp(2),
    borderRadius: borderRadius.round,
    backgroundColor: colors.separator.opaque,
  },
  
  paginationDotActive: {
    backgroundColor: colors.primary,
    width: wp(6),
    ...shadows.sm,
  },
});

export default styles;