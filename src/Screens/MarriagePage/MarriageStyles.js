import { StyleSheet, Platform } from "react-native";
import {
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows, buttonStyles, inputStyles, layout
} from "../../utils/responsiveHelper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.grouped,
  },
  
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: getSafeAreaTop() + spacing.xl,
    paddingBottom: layout.tabBarHeight + spacing.xl,
  },
  
  header: {
    marginBottom: spacing.xxxl,
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  
  title: {
    fontSize: typography.largeTitle,
    fontWeight: "800",
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: "center",
    letterSpacing: -1,
  },
  
  subtitle: {
    fontSize: typography.body,
    color: colors.text.secondary,
    textAlign: "center",
    fontWeight: '500',
    lineHeight: typography.body * 1.3,
  },
  
  section: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadows.md,
  },
  
  sectionTitle: {
    fontSize: typography.title3,
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: spacing.lg,
    letterSpacing: -0.3,
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
    ...shadows.xs,
  },
  
  genderButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
    transform: [{ scale: 1.02 }],
  },
  
  genderText: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.text.secondary,
    marginLeft: spacing.md,
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
  
  ageInput: {
    flex: 1,
    ...inputStyles.default,
    textAlign: 'center',
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.primary,
    height: layout.inputHeight + spacing.md,
  },
  
  ageSeparator: {
    fontSize: typography.title2,
    color: colors.text.secondary,
    fontWeight: "700",
    paddingHorizontal: spacing.md,
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
  },
  
  radioText: {
    fontSize: typography.body,
    color: colors.text.primary,
    marginLeft: spacing.md,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  
  // Search button
  searchButton: {
    ...buttonStyles.primary,
    marginTop: spacing.xxxl,
    height: layout.buttonHeight + spacing.md,
    ...shadows.lg,
  },
  
  searchButtonDisabled: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  searchButtonText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  
  // Form validation
  validationMessage: {
    fontSize: typography.caption1,
    color: colors.danger,
    marginTop: spacing.sm,
    fontWeight: '500',
  },
  
  // Helper text
  helperText: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    marginTop: spacing.sm,
    textAlign: 'center',
    fontWeight: '400',
  },
  
  // Loading overlay
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

export default styles;