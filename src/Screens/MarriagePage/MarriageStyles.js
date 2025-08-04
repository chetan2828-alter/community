import { StyleSheet, Platform, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  fontSize,
  isPixel2,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  spacing,
  borderRadius,
} from "../../utils/responsiveHelper";

const MarriageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'ios' ? hp('6%') : StatusBar.currentHeight + hp('2%'),
  },
  scrollContent: {
    paddingHorizontal: isLargeDevice ? wp("12%") : spacing.lg,
    paddingBottom: hp("5%"),
  },
  header: {
    marginBottom: hp("4%"),
  },
  title: {
    fontSize: fontSize(isSmallDevice ? 32 : 36),
    fontWeight: "700",
    color: "#000",
    marginBottom: hp("1%"),
    textAlign: "center",
    marginTop: hp(isSmallDevice ? "4%" : "6%"),
  },
  subtitle: {
    fontSize: fontSize(16),
    color: "#666",
    textAlign: "center",
  },
  section: {
    marginBottom: hp("3.5%"),
  },
  sectionTitle: {
    fontSize: fontSize(17),
    fontWeight: "600",
    color: "#000",
    marginBottom: hp("2%"),
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
    paddingVertical: hp(isSmallDevice ? "1.8%" : "2.2%"),
    borderRadius: borderRadius.md,
    backgroundColor: "#f5f5f5",
  },
  genderButtonSelected: {
    backgroundColor: "#000",
  },
  genderText: {
    fontSize: fontSize(16),
    fontWeight: "500",
    color: "#000",
    marginLeft: spacing.md,
  },
  genderTextSelected: {
    color: "#fff",
  },
  ageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  ageInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: hp(isSmallDevice ? "1.3%" : "1.7%"),
    fontSize: fontSize(16.5),
  },
  ageSeparator: {
    fontSize: fontSize(16),
    color: "#000",
    fontWeight: "500",
  },
  radioGroup: {
    marginLeft: -spacing.md,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(isSmallDevice ? "1%" : "1.3%"),
  },
  radioText: {
    fontSize: fontSize(16.5),
    color: "#000",
    marginLeft: spacing.md,
  },
  searchButton: {
    backgroundColor: "#000",
    paddingVertical: hp(isSmallDevice ? "2%" : "2.5%"),
    borderRadius: borderRadius.md,
    alignItems: "center",
    marginTop: hp("3%"),
  },
  searchButtonDisabled: {
    backgroundColor: "#aaa",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: fontSize(17),
    fontWeight: "600",
  },
});

export default MarriageStyles;
