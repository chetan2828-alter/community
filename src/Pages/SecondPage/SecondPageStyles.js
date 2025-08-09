import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows, isSmallDevice 
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
    marginBottom: spacing.lg,
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
    paddingHorizontal: spacing.lg,
  },
  
  radioGroup: {
    width: '100%',
    marginBottom: spacing.xxxl,
    gap: spacing.lg,
  },
  
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.background.secondary,
    borderWidth: 2,
    borderColor: colors.separator.nonOpaque,
    ...shadows.sm,
  },
  
  radioButtonSelected: {
    backgroundColor: colors.primary + '15',
    borderColor: colors.primary,
    ...shadows.md,
  },
  
  radioButtonText: {
    fontSize: fontSize(16),
    color: colors.text.primary,
    marginLeft: spacing.lg,
    fontWeight: '500',
    letterSpacing: 0.1,
    flex: 1,
  },
  
  radioButtonTextSelected: {
    color: colors.primary,
    fontWeight: '600',
  },
  
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxxl,
    borderRadius: borderRadius.xl,
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6.5),
    ...shadows.md,
  },
  
  submitButtonDisabled: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  submitButtonText: {
    color: colors.white,
    fontSize: fontSize(16),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});

export default styles;