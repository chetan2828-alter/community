// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',  // Soft background color
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4CAF50',  // Green color for title
//     marginBottom: 20,
//   },
//   radioGroup: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   radioLabel: {
//     fontSize: 18,
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',  // Center-align the label
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,  // Space between radio buttons
//   },
//   radioButtonText: {
//     fontSize: 16,
//     color: '#333',  // Dark gray text color for radio options
//     marginLeft: 10,
//   },
// });

// export default styles;
// 
// 
// pehle ka normal design neeche ka moder design
// 
// 


import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, spacing, borderRadius, isSmallDevice } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? hp('8%') : StatusBar.currentHeight + hp('4%'),
  },
  title: {
    fontSize: fontSize(isSmallDevice ? 30 : 35),
    fontWeight: '900',
    color: 'black',
    marginBottom: hp('5%'),
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  radioGroup: {
    width: '100%',
    marginBottom: hp('5%'),
    paddingHorizontal: spacing.lg,
  },
  radioLabel: {
    fontSize: fontSize(20),
    color: '#34495e',
    marginBottom: hp('1.2%'),
    textAlign: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.5%'),
    paddingHorizontal: spacing.lg,
    paddingVertical: hp('1.5%'),
    borderRadius: borderRadius.md,
    backgroundColor: '#ecf0f1',
    shadowColor: '#bdc3c7',
    shadowOffset: { width: 0, height: hp('0.6%') },
    shadowOpacity: 0.3,
    shadowRadius: wp('2%'),
  },
  radioButtonText: {
    fontSize: fontSize(18),
    color: '#34495e',
    marginLeft: spacing.md,
  },
  button: {
    backgroundColor: '#212529',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('12%'),
    borderRadius: borderRadius.xl,
    marginTop: hp('4%'),
    elevation: 10,
    shadowColor: '#212529',
    shadowOffset: { width: 0, height: hp('1.2%') },
    shadowOpacity: 0.3,
    shadowRadius: wp('4%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: fontSize(20),
    fontWeight: '600',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#212529',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('12%'),
    borderRadius: borderRadius.xl,
    marginTop: hp('4%'),
    elevation: 10,
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: hp('1.2%') },
    shadowOpacity: 0.3,
    shadowRadius: wp('4%'),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: fontSize(20),
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default styles;
