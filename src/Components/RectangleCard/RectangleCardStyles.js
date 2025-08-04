import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, 
  isSmallDevice, colors, typography 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  loaderContainer: {
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  flatListContainer: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  rectangleCard: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    marginHorizontal: spacing.xs,
    minWidth: wp(isSmallDevice ? 20 : 22),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5),
  },
  activeCard: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  inactiveCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cardText: {
    fontSize: fontSize(isSmallDevice ? 11 : 12),
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  activeText: {
    color: colors.primary,
  },
  inactiveText: {
    color: colors.white,
  },
});

export default styles;