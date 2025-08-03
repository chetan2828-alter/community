import { StyleSheet, Platform, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  fontSize,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  spacing,
  borderRadius,
  shadowStyles,
  getSafeAreaPadding,
} from "../../utils/responsiveHelper";

const MarriageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: getSafeAreaPadding().top,
  },
  scrollContent: {
    paddingHorizontal: isLargeDevice ? wp("15%") : spacing.xl,
    paddingBottom: hp("8%"),
    flexGrow: 1,
  },
  header: {
    marginBottom: hp("5%"),
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize(36, 32, 36, 40),
    fontWeight: "800",
    color: "#212529",
    marginBottom: hp("1.5%"),
    textAlign: "center",
    marginTop: hp(isSmallDevice ? "6%" : "8%"),
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: fontSize(16, 15, 16, 17),
    color: "#6c757d",
    textAlign: "center",
    fontWeight: '500',
  },
  section: {
    marginBottom: hp("4%"),
  },
  sectionTitle: {
    fontSize: fontSize(18, 17, 18, 19),
    fontWeight: "700",
    color: "#212529",
    marginBottom: hp("2.5%"),
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
    paddingVertical: hp("2%"),
    borderRadius: borderRadius.lg,
    backgroundColor: "#f8f9fa",
    borderWidth: 2,
    borderColor: "#e9ecef",
    ...shadowStyles.light,
  },
  genderButtonSelected: {
    backgroundColor: "#212529",
    borderColor: "#212529",
    transform: [{ scale: 1.02 }],
  },
  genderText: {
    fontSize: fontSize(16, 15, 16, 17),
    fontWeight: "600",
    color: "#212529",
    marginLeft: spacing.sm,
  },
  genderTextSelected: {
    color: "#ffffff",
  },
  ageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  ageInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: "#dee2e6",
    paddingVertical: hp("2%"),
    fontSize: fontSize(18, 16, 18, 19),
    color: "#212529",
    fontWeight: '500',
    textAlign: 'center',
  },
  ageSeparator: {
    fontSize: fontSize(20, 18, 20, 22),
    color: "#212529",
    fontWeight: "700",
  },
  radioGroup: {
    marginLeft: -spacing.sm,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
    marginVertical: hp('0.5%'),
  },
  radioText: {
    fontSize: fontSize(17, 16, 17, 18),
    color: "#212529",
    marginLeft: spacing.md,
    fontWeight: '500',
  },
  searchButton: {
    backgroundColor: "#212529",
    paddingVertical: hp("2.5%"),
    borderRadius: borderRadius.lg,
    alignItems: "center",
    marginTop: hp("4%"),
    ...shadowStyles.medium,
  },
  searchButtonDisabled: {
    backgroundColor: "#adb5bd",
    opacity: 0.6,
  },
  searchButtonText: {
    color: "#ffffff",
    fontSize: fontSize(18, 17, 18, 19),
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});

export default MarriageStyles;