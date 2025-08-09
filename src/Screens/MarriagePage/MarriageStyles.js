import { StyleSheet, Platform } from "react-native";
import {
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows, buttonStyles, inputStyles, layout
} from "../../utils/responsiveHelper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: layout.tabBarHeight + spacing.xl,
  },
  
  header: {
    marginBottom: spacing.xxxl,
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  
  title: {
    fontSize: fontSize(28),
    fontWeight: "800",
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  
  subtitle: {
    fontSize: fontSize(16),
    color: colors.text.secondary,
    textAlign: "center",
    fontWeight: '500',
    lineHeight: fontSize(16) * 1.3,
  },
  
  section: {
    backgroundColor: colors.background.primary,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator.nonOpaque,
    ...shadows.sm,
  },
  
  sectionTitle: {
    fontSize: fontSize(18),
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: spacing.lg,
    letterSpacing: -0.2,
  },
  
  // Gender selection
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.lg,
  },
  
  genderButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xl,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.background.secondary,
    borderWidth: 2,
    borderColor: colors.separator.nonOpaque,
    gap: spacing.md,
    ...shadows.xs,
  },
  
  genderButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
    transform: [{ scale: 1.02 }],
  },
  
  genderText: {
    fontSize: fontSize(16),
    fontWeight: "600",
    color: colors.text.primary,
    letterSpacing: 0.1,
  },
  
  genderTextSelected: {
    color: colors.white,
    fontWeight: "700",
  },
  
  // Age inputs
  ageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  
  ageInputContainer: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    paddingHorizontal: spacing.lg,
    height: hp(6),
    justifyContent: 'center',
  },
  
  ageInput: {
    textAlign: 'center',
    fontSize: fontSize(18),
    fontWeight: '600',
    color: colors.text.primary,
    padding: 0,
  },
  
  ageSeparator: {
    fontSize: fontSize(16),
    color: colors.text.secondary,
    fontWeight: "600",
    paddingHorizontal: spacing.md,
  },
  
  helperText: {
    fontSize: fontSize(12),
    color: colors.text.tertiary,
    marginTop: spacing.sm,
    fontWeight: '500',
  },
  
  // Radio buttons
  radioGroup: {
    gap: spacing.md,
  },
  
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  radioOptionSelected: {
    backgroundColor: colors.primary + '15',
    borderColor: colors.primary,
    ...shadows.sm,
  },
  
  radioText: {
    fontSize: fontSize(16),
    color: colors.text.primary,
    marginLeft: spacing.md,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  
  radioTextSelected: {
    color: colors.primary,
    fontWeight: '600',
  },
  
  // Search button
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xl,
    height: hp(6.5),
    ...shadows.lg,
  },
  
  searchButtonDisabled: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  searchButtonText: {
    color: colors.white,
    fontSize: fontSize(16),
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  
  validationText: {
    fontSize: fontSize(12),
    color: colors.danger,
    textAlign: 'center',
    marginTop: spacing.md,
    fontWeight: '500',
  },
});

export default styles;