import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingBottom: spacing.md,
  },
  
  loaderContainer: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  
  flatListContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  
  rectangleCard: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    marginHorizontal: spacing.sm,
    minWidth: wp(24),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    borderWidth: 2,
    position: 'relative',
    ...shadows.xs,
  },
  
  activeCard: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
    transform: [{ scale: 1.05 }],
  },
  
  inactiveCard: {
    backgroundColor: colors.background.secondary,
    borderColor: colors.separator.nonOpaque,
  },
  
  cardText: {
    fontSize: typography.subhead,
    fontWeight: '700',
    letterSpacing: 0.3,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  
  activeText: {
    color: colors.white,
  },
  
  inactiveText: {
    color: colors.text.secondary,
  },
  
  activeIndicator: {
    position: 'absolute',
    bottom: -spacing.sm,
    left: '50%',
    marginLeft: -spacing.md,
    width: spacing.lg,
    height: spacing.xs,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xs,
    ...shadows.sm,
  },
});

export default styles;