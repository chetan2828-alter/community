import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[50],
    padding: spacing.lg,
    paddingTop: getSafeAreaTop() + spacing.xxl,
  },
  title: {
    fontSize: typography.h1,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: spacing.xxl,
    textAlign: 'center',
    letterSpacing: 1,
  },
  pickerContainer: {
    height: hp(7),
    width: wp(85),
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    borderColor: colors.primary,
    borderWidth: 2,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.medium,
  },
  icon: {
    marginRight: spacing.sm,
  },
  picker: {
    flex: 1,
    height: hp(6),
    color: colors.primary,
    fontSize: typography.h6,
    fontWeight: '500',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: wp(12),
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: typography.h5,
  },
  changeLanguageButton: {
    backgroundColor: colors.gray[200],
    paddingVertical: spacing.md,
    paddingHorizontal: wp(10),
    borderRadius: borderRadius.md,
    marginTop: spacing.lg,
    ...shadows.small,
  },
  changeLanguageText: {
    fontSize: typography.h6,
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;