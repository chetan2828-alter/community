import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    paddingVertical: spacing.lg,
  },
  
  loaderContainer: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  
  flatListContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  
  circleCard: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.round,
    marginHorizontal: spacing.sm,
    minWidth: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5),
    borderWidth: 2,
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
    fontSize: fontSize(12),
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  
  activeText: {
    color: colors.white,
  },
  
  inactiveText: {
    color: colors.text.secondary,
  },
  
  languageBtn: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.xl,
    marginTop: spacing.md,
    ...shadows.md,
  },
  
  languageText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: fontSize(14),
    letterSpacing: 0.2,
  },
});

export default styles;