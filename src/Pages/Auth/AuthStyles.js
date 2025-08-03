import { StyleSheet, Platform, StatusBar } from "react-native";
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { 
  fontSize, 
  isSmallDevice, 
  spacing, 
  borderRadius, 
  shadowStyles,
  getSafeAreaPadding 
} from '../../utils/responsiveHelper';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: hp('4%'),
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    marginTop: getSafeAreaPadding().top,
    marginBottom: hp('2%'),
  },
  logo: {
    fontSize: fontSize(32, 28, 32, 36),
    fontWeight: "900",
    textAlign: "center",
    color: "#212529",
    marginBottom: hp('3%'),
    marginTop: hp('2%'),
    letterSpacing: 1,
  },
  logoBold: {
    color: "#212529",
    fontWeight: "900",
  },
  logoLight: {
    color: "#495057",
    fontWeight: "600",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: borderRadius.xxl,
    overflow: "hidden",
    width: wp('85%'),
    height: hp('7%'),
    alignSelf: 'center',
    marginBottom: hp('3%'),
    ...shadowStyles.light,
  },
  toggle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeToggle: {
    backgroundColor: "#212529",
  },
  toggleText: {
    fontSize: fontSize(16, 15, 16, 17),
    fontWeight: "600",
    color: "#6c757d",
  },
  activeToggleText: {
    color: "#ffffff",
  },
  formContainer: {
    width: "100%",
    marginBottom: hp('3%'),
  },
  sectionTitle: {
    fontSize: fontSize(15, 14, 15, 16),
    fontWeight: "700",
    color: "#495057",
    marginBottom: hp('1%'),
    marginLeft: spacing.xs,
  },
  genderToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp('2.5%'),
    gap: spacing.sm,
  },
  genderOption: {
    flex: 1,
    paddingVertical: hp('1.8%'),
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: "#dee2e6",
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    ...shadowStyles.light,
  },
  genderSelected: {
    backgroundColor: "#212529",
    borderColor: "#212529",
  },
  genderText: {
    color: "#495057",
    fontWeight: "600",
    fontSize: fontSize(16, 15, 16, 17),
  },
  genderSelectedText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp('2.5%'),
    gap: spacing.sm,
  },
  nameInputContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#dee2e6",
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: "#ffffff",
    height: hp('7%'),
    justifyContent: "center",
    ...shadowStyles.light,
  },
  nameInput: {
    fontSize: fontSize(16, 15, 16, 17),
    color: "#212529",
    paddingVertical: 0,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#dee2e6",
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    marginBottom: hp('2.5%'),
    height: hp('7%'),
    backgroundColor: "#ffffff",
    ...shadowStyles.light,
  },
  input: {
    flex: 1,
    fontSize: fontSize(16, 15, 16, 17),
    color: "#212529",
    paddingVertical: hp('1%'),
    marginLeft: spacing.sm,
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: "#212529",
    paddingVertical: hp('2.2%'),
    borderRadius: borderRadius.lg,
    alignItems: "center",
    marginTop: hp('2.5%'),
    marginBottom: hp('1.5%'),
    ...shadowStyles.medium,
  },
  actionButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: fontSize(17, 16, 17, 18),
    letterSpacing: 0.5,
  },
  privacyPolicyContainer: {
    marginTop: hp('2%'),
    paddingHorizontal: spacing.md,
  },
  privacyPolicyText: {
    fontSize: fontSize(13, 12, 13, 14),
    color: "#6c757d",
    textAlign: "center",
    lineHeight: hp('2.5%'),
  },
  privacyPolicyLink: {
    color: "#212529",
    textDecorationLine: "underline",
    fontWeight: '600',
  },
  errorText: {
    color: "#dc3545",
    fontSize: fontSize(14, 13, 14, 15),
    textAlign: "center",
    marginBottom: hp('2%'),
    marginTop: hp('1%'),
    fontWeight: '500',
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
    marginVertical: hp('2.5%'),
    paddingHorizontal: spacing.sm,
  },
  checkbox: {
    width: wp(isSmallDevice ? '5.5%' : '5%'),
    height: wp(isSmallDevice ? '5.5%' : '5%'),
    borderWidth: 2,
    borderColor: '#dee2e6',
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    backgroundColor: '#ffffff',
  },
  checkboxChecked: {
    backgroundColor: '#212529',
    borderColor: '#212529',
  },
  checkboxCheckmark: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: fontSize(12, 11, 12, 13),
  },
  termsText: {
    fontSize: fontSize(14, 13, 14, 15),
    color: '#495057',
    flex: 1,
    lineHeight: hp('2.2%'),
  },
  termsLink: {
    color: '#0d6efd',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
});