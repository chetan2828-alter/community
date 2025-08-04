import { StyleSheet, Platform } from "react-native";
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop, 
  colors, typography, shadows, isSmallDevice 
} from '../../utils/responsiveHelper';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingBottom: spacing.lg,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    marginTop: getSafeAreaTop() + spacing.lg,
    marginBottom: spacing.md,
  },
  logo: {
    fontSize: typography.h1,
    fontWeight: "900",
    textAlign: "center",
    color: colors.dark,
    marginBottom: spacing.xl,
    marginTop: spacing.lg,
  },
  logoBold: {
    color: colors.black,
    fontWeight: "900",
  },
  logoLight: {
    color: colors.gray[600],
    fontWeight: "600",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: colors.gray[100],
    borderRadius: borderRadius.xxl,
    overflow: "hidden",
    width: wp(80),
    height: hp(6.5),
    alignSelf: 'center',
    marginBottom: spacing.xl,
    ...shadows.small,
  },
  toggle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeToggle: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    fontSize: typography.h6,
    fontWeight: "600",
    color: colors.gray[600],
  },
  activeToggleText: {
    color: colors.white,
  },
  formContainer: {
    width: "100%",
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.gray[700],
    marginBottom: spacing.sm,
    marginLeft: spacing.sm,
  },
  genderToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  genderOption: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.xxl,
    borderWidth: 2,
    borderColor: colors.gray[300],
    backgroundColor: colors.gray[50],
    alignItems: "center",
    ...shadows.small,
  },
  genderSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  genderText: {
    color: colors.gray[600],
    fontWeight: "600",
    fontSize: typography.h6,
  },
  genderSelectedText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: typography.h6,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  nameInputContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
    height: hp(6.5),
    justifyContent: "center",
    ...shadows.small,
  },
  nameInput: {
    fontSize: typography.h6,
    color: colors.dark,
    paddingVertical: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
    height: hp(6.5),
    backgroundColor: colors.white,
    ...shadows.small,
  },
  input: {
    flex: 1,
    fontSize: typography.h6,
    color: colors.dark,
    paddingVertical: spacing.sm,
    marginLeft: spacing.sm,
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  actionButtonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: typography.h6,
  },
  privacyPolicyContainer: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  privacyPolicyText: {
    fontSize: fontSize(12),
    color: colors.gray[600],
    textAlign: "center",
    lineHeight: fontSize(18),
  },
  privacyPolicyLink: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontWeight: '600',
  },
  errorText: {
    color: colors.danger,
    fontSize: typography.body,
    textAlign: "center",
    marginBottom: spacing.md,
    marginTop: spacing.sm,
  },
  headerCentered: {
    alignItems: 'center',
  },
  toggleContainerCentered: {
    alignSelf: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  checkbox: {
    width: wp(5),
    height: wp(5),
    borderWidth: 2,
    borderColor: colors.gray[400],
    borderRadius: borderRadius.xs,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxCheckmark: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize(12),
  },
  termsText: {
    fontSize: typography.body,
    color: colors.gray[600],
    flex: 1,
    lineHeight: fontSize(18),
  },
  termsLink: {
    color: colors.info,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
});