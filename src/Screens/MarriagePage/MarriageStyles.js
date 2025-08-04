import { StyleSheet, Platform } from "react-native";
import {
  wp, hp, fontSize, spacing, borderRadius, getSafeAreaTop,
  colors, typography, shadows, isSmallDevice
} from "../../utils/responsiveHelper";

const MarriageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: getSafeAreaTop(),
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: hp(8), // Space for tab bar
  },
  header: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: isSmallDevice ? typography.h1 : fontSize(36),
    fontWeight: "800",
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: "center",
    marginTop: spacing.xl,
  },
  subtitle: {
    fontSize: typography.h6,
    color: colors.gray[600],
    textAlign: "center",
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.h5,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: spacing.md,
  },
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  genderButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.gray[100],
    borderWidth: 2,
    borderColor: colors.gray[300],
    ...shadows.small,
  },
  genderButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  genderText: {
    fontSize: typography.h6,
    fontWeight: "600",
    color: colors.gray[700],
    marginLeft: spacing.sm,
  },
  genderTextSelected: {
    color: colors.white,
  },
  ageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  ageInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: colors.gray[300],
    paddingVertical: spacing.md,
    fontSize: typography.h5,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
  },
  ageSeparator: {
    fontSize: typography.h4,
    color: colors.primary,
    fontWeight: "700",
  },
  radioGroup: {
    marginLeft: -spacing.sm,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
    marginVertical: spacing.xs,
  },
  radioText: {
    fontSize: typography.h6,
    color: colors.gray[700],
    marginLeft: spacing.sm,
    fontWeight: '500',
  },
  searchButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: "center",
    marginTop: spacing.xl,
    ...shadows.medium,
  },
  searchButtonDisabled: {
    backgroundColor: colors.gray[400],
  },
  searchButtonText: {
    color: colors.white,
    fontSize: typography.h5,
    fontWeight: "700",
  },
});

export default MarriageStyles;