// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     justifyContent: 'center', // Added to help center content
//   },
//   header: {
//     width: '100%',
//     marginTop: 80, // Increased from 20 to push content down
//     marginBottom: 10,
//   },
  
//   logo: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#333",
//     marginBottom: 30, // Reduced from 30 to 20 to bring toggle up slightly
//     marginTop: 20, // Added to create more space above logo
//   },
//   logoBold: {
//     color: "#000",
//   },
//   logoLight: {
//     color: "#555",
//     fontWeight: 'normal',
//   },
//   toggleContainer: {
//     flexDirection: "row",
//     backgroundColor: "#f0f0f0",
//     borderRadius: 25,
//     overflow: "hidden",
//     width: "80%",
//     height: 50,
//     alignSelf: 'center',
//     marginBottom: 30, // Reduced from 30 to 20 to bring form up
//   },
//   toggle: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   activeToggle: {
//     backgroundColor: "#000",
//   },
//   toggleText: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#666",
//   },
//   activeToggleText: {
//     color: "white",
//   },
//   formContainer: {
//     width: "100%",
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#555",
//     marginBottom: 8,
//     marginLeft: 5,
//   },
//   genderToggleContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   genderOption: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     marginHorizontal: 5,
//     backgroundColor: "#f9f9f9",
//     alignItems: "center",
//   },
//   genderSelected: {
//     backgroundColor: "#000",
//     borderColor: "#000",
//   },
//   genderText: {
//     color: "#555",
//     fontWeight: "600",
//   },
//   genderSelectedText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   inputRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },
//   nameInputContainer: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     backgroundColor: "#fff",
//     height: 50,
//     marginHorizontal: 5,
//     justifyContent: "center",
//   },
//   nameInput: {
//     fontSize: 16,
//     color: "#333",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     height: 50,
//     backgroundColor: "#fff",
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333",
//     paddingVertical: 5,
//     marginLeft: 10,
//   },
//   actionButton: {
//     backgroundColor: "#000",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   actionButtonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   privacyPolicyContainer: {
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
//   privacyPolicyText: {
//     fontSize: 12,
//     color: "#666",
//     textAlign: "center",
//     lineHeight: 18,
//   },
//   privacyPolicyLink: {
//     color: "#000",
//     textDecorationLine: "underline",
//     fontWeight: '600',
//   },
//   errorText: {
//     color: "#d32f2f",
//     fontSize: 14,
//     textAlign: "center",
//     marginBottom: 15,
//     marginTop: 5,
//   },

//  headerCentered: {
//   alignItems: 'center',
// },
// toggleContainerCentered: {
//   alignSelf: 'center',
// },
// termsContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginVertical: 15,
// },
// checkbox: {
//   width: 20,
//   height: 20,
//   borderWidth: 1,
//   borderColor: '#ccc',
//   borderRadius: 4,
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginRight: 8,
// },
// checkboxChecked: {
//   backgroundColor: '#363a3dff',
//   borderColor: '#333538ff',
// },
// checkboxCheckmark: {
//   color: 'white',
//   fontWeight: 'bold',
// },
// termsText: {
//   fontSize: 14,
//   color: '#666',
//   flex: 1,
// },
// termsLink: {
//   color: '#007AFF',
//   textDecorationLine: 'underline',
// },
// disabledButton: {
//   opacity: 0.6,
// }, 
// });

// making responsive design 

import { StyleSheet, Platform, StatusBar } from "react-native";
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { fontSize, isSmallDevice, spacing, borderRadius } from '../../utils/responsiveHelper';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: hp('2%'),
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    marginTop: Platform.OS === 'ios' ? hp('8%') : StatusBar.currentHeight + hp('4%'),
    marginBottom: hp('1.5%'),
  },
  logo: {
    fontSize: fontSize(28),
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: hp('2.5%'),
    marginTop: hp('1.5%'),
  },
  logoBold: {
    color: "#111",
    fontWeight: "900",
    fontSize: fontSize(28),
  },
  logoLight: {
    color: "#555",
    fontWeight: "600",
    fontSize: fontSize(26),
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    marginBottom: hp('2.5%'),
  },
  toggle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeToggle: {
    backgroundColor: "#000",
  },
  toggleText: {
    fontSize: fontSize(16),
    fontWeight: "600",
    color: "#666",
  },
  activeToggleText: {
    color: "white",
  },
  formContainer: {
    width: "100%",
    marginBottom: hp('2%'),
  },
  sectionTitle: {
    fontSize: fontSize(14),
    fontWeight: "600",
    color: "#555",
    marginBottom: hp('0.8%'),
    marginLeft: spacing.sm,
  },
  genderToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp('2%'),
  },
  genderOption: {
    flex: 1,
    paddingVertical: hp('1.2%'),
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: spacing.sm,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  genderSelected: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  genderText: {
    color: "#555",
    fontWeight: "600",
    fontSize: fontSize(16),
  },
  genderSelectedText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: fontSize(16),
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp('1.8%'),
  },
  nameInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    backgroundColor: "#fff",
    height: hp('6.5%'),
    marginHorizontal: spacing.sm,
    justifyContent: "center",
  },
  nameInput: {
    fontSize: fontSize(16),
    color: "#333",
    paddingVertical: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    marginBottom: hp('2%'),
    height: hp('6.5%'),
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: fontSize(16),
    color: "#333",
    paddingVertical: hp('0.8%'),
    marginLeft: spacing.sm,
  },
  actionButton: {
    backgroundColor: "#000",
    paddingVertical: hp('2%'),
    borderRadius: borderRadius.md,
    alignItems: "center",
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSize(16),
  },
  privacyPolicyContainer: {
    marginTop: hp('1.5%'),
    paddingHorizontal: spacing.md,
  },
  privacyPolicyText: {
    fontSize: fontSize(12),
    color: "#666",
    textAlign: "center",
    lineHeight: hp('2.2%'),
  },
  privacyPolicyLink: {
    color: "#000",
    textDecorationLine: "underline",
    fontWeight: '600',
  },
  errorText: {
    color: "#d32f2f",
    fontSize: fontSize(14),
    textAlign: "center",
    marginBottom: hp('1.5%'),
    marginTop: hp('0.8%'),
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
    marginVertical: hp('2%'),
  },
  checkbox: {
    width: wp(isSmallDevice ? '5%' : '4.5%'),
    height: wp(isSmallDevice ? '5%' : '4.5%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  checkboxChecked: {
    backgroundColor: '#363a3dff',
    borderColor: '#333538ff',
  },
  checkboxCheckmark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSize(14),
  },
  termsText: {
    fontSize: fontSize(14),
    color: '#666',
    flex: 1,
  },
  termsLink: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  disabledButton: {
    opacity: 0.6,
  },
});
