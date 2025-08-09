import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: getSafeAreaTop(),
  },
  
  title: {
    fontSize: fontSize(28),
    fontWeight: '800',
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  
  subtitle: {
    fontSize: fontSize(16),
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.xxxl,
    fontWeight: '500',
    lineHeight: fontSize(16) * 1.3,
  },
  
  pickerSection: {
    width: '100%',
    marginBottom: spacing.xxxl,
  },
  
  pickerContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: hp(7),
    ...shadows.sm,
  },
  
  icon: {
    marginRight: spacing.md,
  },
  
  picker: {
    flex: 1,
    color: colors.text.primary,
    fontSize: fontSize(16),
    fontWeight: '500',
  },
  
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
  },
  
  loadingText: {
    marginLeft: spacing.md,
    fontSize: fontSize(14),
    color: colors.text.secondary,
    fontWeight: '500',
  },
  
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxxl,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.xl,
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6.5),
    ...shadows.md,
  },
  
  buttonDisabled: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize(16),
    letterSpacing: 0.2,
  },
  
  changeLanguageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  languageIcon: {
    marginRight: spacing.sm,
  },
  
  changeLanguageText: {
    fontSize: fontSize(14),
    color: colors.primary,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
});

export default styles;