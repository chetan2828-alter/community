
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f7f9fc',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#34495e',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   pickerContainer: {
//     width: '80%',
//     backgroundColor: '#ecf0f1',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   picker: {
//     height: 50,
//     color: '#34495e',
//   },
//   button: {
//     backgroundColor: '#2ecc71',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default styles;

// upar wala bhi ok ok hi but neeche wala more styling k liye kar rahe 


import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, spacing, borderRadius } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
    padding: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? hp('10%') : StatusBar.currentHeight + hp('5%'),
  },
  title: {
    fontSize: fontSize(32),
    fontWeight: '900',
    color: 'Black',
    marginBottom: hp('5%'),
    textAlign: 'center',
    letterSpacing: 1,
  },
  pickerContainer: {
    height: hp('8%'),
    width: wp('80%'),
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    borderColor: '#212529',
    borderWidth: 2,
    marginBottom: hp('4%'),
    paddingHorizontal: spacing.md,
    paddingVertical: hp('1.2%'),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    marginRight: spacing.sm,
  },
  picker: {
    flex: 1,
    height: hp('7%'),
    color: '#212529',
    fontSize: fontSize(16),
    borderRadius: borderRadius.md,
    paddingVertical: hp('1.2%'),
  },
  button: {
    backgroundColor: '#212529',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('10%'),
    borderRadius: borderRadius.lg,
    marginBottom: hp('2.5%'),
    elevation: 5,
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: hp('1.2%') },
    shadowOpacity: 0.3,
    shadowRadius: wp('4%'),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: fontSize(18),
  },
  changeLanguageButton: {
    backgroundColor: '#ecf0f1',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('8%'),
    borderRadius: borderRadius.md,
    marginTop: hp('2.5%'),
    elevation: 3,
    shadowColor: '#bdc3c7',
    shadowOffset: { width: 0, height: hp('0.6%') },
    shadowOpacity: 0.2,
    shadowRadius: wp('2%'),
  },
  changeLanguageText: {
    fontSize: fontSize(16),
    color: '#212529',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
