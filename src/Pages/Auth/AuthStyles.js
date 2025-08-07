import { StyleSheet, Platform } from "react-native";
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop, 
  colors, typography, shadows, inputStyles, buttonStyles, layout
} from '../../utils/responsiveHelper';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background.grouped,
  },
  
  container: {
    flex: 1,
    backgroundColor: colors.background.grouped,
  },
  
  header: {
    backgroundColor: colors.white,
    paddingTop: getSafeAreaTop() + spacing.xl,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    ...shadows.sm,
  },
  
  logo: {
    fontSize: typography.largeTitle,
    fontWeight: '800',
    textAlign: "center",
    color: colors.text.primary,
    marginBottom: spacing.xl,
    letterSpacing: -1,
  },
  
  logoBold: {
    color: colors.primary,
    fontWeight: "900",
  },
  
  logoLight: {
    color: colors.text.secondary,
    fontWeight: "600",
  },
  
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    width: wp(75),
    height: layout.buttonHeight,
    ...shadows.xs,
  },
  
  toggle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderRadius.lg,
    marginHorizontal: spacing.xs,
    marginVertical: spacing.xs,
  },
  
  activeToggle: {
    backgroundColor: colors.white,
    ...shadows.sm,
  },
  
  toggleText: {
    fontSize: typography.subhead,
    fontWeight: "600",
    color: colors.text.secondary,
    letterSpacing: 0.1,
  },
  
  activeToggleText: {
    color: colors.primary,
    fontWeight: '700',
  },
  
  formContainer: {
    backgroundColor: colors.white,
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    ...shadows.md,
  },
  
  sectionTitle: {
    fontSize: typography.headline,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: spacing.md,
    letterSpacing: -0.2,
  },
  
  genderToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  
  genderOption: {
    flex: 1,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: colors.separator.opaque,
    backgroundColor: colors.background.secondary,
    alignItems: "center",
    ...shadows.xs,
  },
  
  genderSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
  },
  
  genderText: {
    color: colors.text.secondary,
    fontWeight: "600",
    fontSize: typography.body,
    letterSpacing: 0.1,
  },
  
  genderSelectedText: {
    color: colors.white,
    fontWeight: "700",
  },
  
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  
  nameInputContainer: {
    flex: 1,
    ...inputStyles.default,
    height: layout.inputHeight,
    justifyContent: "center",
  },
  
  nameInput: {
    fontSize: typography.body,
    color: colors.text.primary,
    paddingVertical: 0,
    fontWeight: '500',
  },
  
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    ...inputStyles.default,
    marginBottom: spacing.xl,
    height: layout.inputHeight,
    paddingHorizontal: spacing.lg,
  },
  
  input: {
    flex: 1,
    fontSize: typography.body,
    color: colors.text.primary,
    paddingVertical: spacing.md,
    marginLeft: spacing.md,
    fontWeight: '500',
  },
  
  eyeButton: {
    padding: spacing.sm,
    borderRadius: borderRadius.md,
  },
  
  actionButton: {
    ...buttonStyles.primary,
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
    height: layout.buttonHeight + spacing.md,
  },
  
  disabledButton: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  actionButtonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: typography.body,
    letterSpacing: 0.2,
  },
  
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: spacing.xl,
    paddingHorizontal: spacing.sm,
  },
  
  checkbox: {
    width: wp(5),
    height: wp(5),
    borderWidth: 2,
    borderColor: colors.separator.opaque,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    marginTop: spacing.xs,
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
    fontSize: typography.footnote,
    color: colors.text.secondary,
    flex: 1,
    lineHeight: typography.footnote * 1.4,
    fontWeight: '400',
  },
  
  termsLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  
  errorText: {
    color: colors.danger,
    fontSize: typography.subhead,
    textAlign: "center",
    marginBottom: spacing.lg,
    marginTop: spacing.sm,
    fontWeight: '500',
    backgroundColor: colors.danger + '10',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.danger + '30',
  },
  
  // Form sections
  formSection: {
    marginBottom: spacing.xl,
  },
  
  sectionDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator.nonOpaque,
    marginVertical: spacing.xl,
  },
  
  // Password strength indicator
  passwordStrength: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  
  strengthBar: {
    flex: 1,
    height: spacing.xs,
    backgroundColor: colors.background.secondary,
    marginHorizontal: spacing.xs,
    borderRadius: borderRadius.xs,
  },
  
  strengthBarActive: {
    backgroundColor: colors.success,
  },
  
  strengthBarWeak: {
    backgroundColor: colors.warning,
  },
  
  strengthBarStrong: {
    backgroundColor: colors.success,
  },
});