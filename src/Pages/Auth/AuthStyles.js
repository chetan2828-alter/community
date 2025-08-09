import { StyleSheet, Platform } from "react-native";
import { 
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop, 
  colors, typography, shadows, inputStyles, buttonStyles, layout
} from '../../utils/responsiveHelper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  
  header: {
    backgroundColor: colors.background.primary,
    paddingTop: getSafeAreaTop() + spacing.xl,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator.nonOpaque,
  },
  
  logo: {
    fontSize: fontSize(32),
    fontWeight: '800',
    textAlign: "center",
    color: colors.text.primary,
    marginBottom: spacing.xl,
    letterSpacing: -0.5,
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
    width: wp(80),
    height: hp(6),
    padding: spacing.xs,
  },
  
  toggle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderRadius.lg,
    marginHorizontal: spacing.xs,
  },
  
  activeToggle: {
    backgroundColor: colors.primary,
    ...shadows.sm,
  },
  
  toggleText: {
    fontSize: fontSize(16),
    fontWeight: "600",
    color: colors.text.secondary,
    letterSpacing: 0.1,
  },
  
  activeToggleText: {
    color: colors.white,
    fontWeight: '700',
  },
  
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background.primary,
  },
  
  formContainer: {
    backgroundColor: colors.background.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
  },
  
  formSection: {
    marginBottom: spacing.xl,
  },
  
  sectionTitle: {
    fontSize: fontSize(20),
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: spacing.lg,
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
    fontSize: fontSize(16),
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
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    paddingHorizontal: spacing.lg,
    height: hp(6.5),
    justifyContent: "center",
  },
  
  nameInput: {
    fontSize: fontSize(16),
    color: colors.text.primary,
    fontWeight: '500',
    padding: 0,
    margin: 0,
  },
  
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    height: hp(6.5),
  },
  
  input: {
    flex: 1,
    fontSize: fontSize(16),
    color: colors.text.primary,
    paddingVertical: 0,
    marginLeft: spacing.md,
    fontWeight: '500',
  },
  
  eyeButton: {
    padding: spacing.sm,
    borderRadius: borderRadius.md,
  },
  
  actionButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
    height: hp(6.5),
    ...shadows.md,
  },
  
  disabledButton: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  actionButtonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: fontSize(16),
    letterSpacing: 0.2,
  },
  
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: spacing.xl,
    paddingHorizontal: spacing.sm,
  },
  
  checkbox: {
    width: wp(5.5),
    height: wp(5.5),
    borderWidth: 2,
    borderColor: colors.separator.opaque,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    marginTop: spacing.xs,
    backgroundColor: colors.background.primary,
  },
  
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  
  termsText: {
    fontSize: fontSize(14),
    color: colors.text.secondary,
    flex: 1,
    lineHeight: fontSize(14) * 1.4,
    fontWeight: '400',
  },
  
  termsLink: {
    color: colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  
  errorText: {
    color: colors.danger,
    fontSize: fontSize(14),
    textAlign: "center",
    marginBottom: spacing.lg,
    marginTop: spacing.sm,
    fontWeight: '500',
    backgroundColor: colors.danger + '15',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.danger + '30',
    marginHorizontal: spacing.md,
  },
});