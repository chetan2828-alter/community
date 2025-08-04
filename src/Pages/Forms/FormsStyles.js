import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows 
} from '../../utils/responsiveHelper';

const FormsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.gray[50],
    paddingTop: getSafeAreaTop() + spacing.lg,
  },
  progressContainer: {
    marginTop: spacing.lg,
  },
  stepContent: {
    flex: 1,
    paddingVertical: spacing.xl,
  },
  label: {
    fontSize: typography.h6,
    fontWeight: '700',
    color: colors.gray[700],
    marginBottom: spacing.sm,
  },
  input: {
    width: '100%',
    height: hp(6.5),
    backgroundColor: colors.white,
    borderColor: colors.gray[300],
    borderWidth: 2,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
    fontSize: typography.body,
    color: colors.primary,
    ...shadows.small,
  },
  inputPlaceholder: {
    color: colors.gray[500],
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    marginTop: spacing.xl,
    ...shadows.medium,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.h6,
    fontWeight: '700',
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
});

export default FormsStyle;