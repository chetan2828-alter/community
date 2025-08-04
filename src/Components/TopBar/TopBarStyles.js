import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows, 
  getSafeAreaTop, colors, iconSize 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingTop: getSafeAreaTop(),
    paddingBottom: spacing.md,
    ...shadows.large,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  profileContainer: {
    width: wp(14),
    height: wp(14),
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFD700',
    ...shadows.small,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.round,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  iconContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
});

export default styles;