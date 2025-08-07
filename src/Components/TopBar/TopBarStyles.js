import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows, 
  getSafeAreaTop, colors, typography, iconSize, layout
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: getSafeAreaTop(),
    paddingBottom: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator.nonOpaque,
    ...shadows.sm,
  },
  
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.lg,
  },
  
  appTitle: {
    fontSize: typography.largeTitle,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: -1,
  },
  
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.lg,
  },
  
  profileContainer: {
    width: layout.avatarSizes.lg,
    height: layout.avatarSizes.lg,
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.primary,
    ...shadows.md,
  },
  
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.round,
  },
  
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    ...shadows.xs,
  },
  
  iconContainer: {
    position: 'relative',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    marginHorizontal: spacing.xs,
  },
  
  notificationBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.danger,
    borderRadius: borderRadius.round,
    width: wp(4.5),
    height: wp(4.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    ...shadows.sm,
  },
  
  badgeText: {
    fontSize: fontSize(10),
    color: colors.white,
    fontWeight: '800',
  },
});

export default styles;