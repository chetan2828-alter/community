import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows, isSmallDevice 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    paddingTop: getSafeAreaTop() + spacing.xl,
  },
  title: {
    fontSize: isSmallDevice ? typography.h1 : fontSize(38),
    fontWeight: '900',
    color: colors.primary,
    marginBottom: spacing.xxl,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  radioGroup: {
    width: '100%',
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
  },
  radioLabel: {
    fontSize: typography.h4,
    color: colors.gray[700],
    marginBottom: spacing.lg,
    textAlign: 'center',
    fontWeight: '600',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.gray[200],
    ...shadows.small,
  },
  radioButtonText: {
    fontSize: typography.h5,
    color: colors.gray[700],
    marginLeft: spacing.md,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: wp(15),
    borderRadius: borderRadius.lg,
    marginTop: spacing.xl,
    ...shadows.medium,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: typography.h4,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default styles;