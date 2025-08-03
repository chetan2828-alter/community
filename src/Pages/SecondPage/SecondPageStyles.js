import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { 
  fontSize, 
  spacing, 
  borderRadius, 
  shadowStyles,
  getSafeAreaPadding,
  isSmallDevice 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    paddingTop: getSafeAreaPadding().top + hp('5%'),
  },
  title: {
    fontSize: fontSize(38, 34, 38, 42),
    fontWeight: '900',
    color: '#212529',
    marginBottom: hp('6%'),
    textAlign: 'center',
    letterSpacing: 1.5,
    lineHeight: hp('5%'),
  },
  radioGroup: {
    width: '100%',
    marginBottom: hp('6%'),
    paddingHorizontal: spacing.lg,
  },
  radioLabel: {
    fontSize: fontSize(20, 18, 20, 22),
    color: '#495057',
    marginBottom: hp('3%'),
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: hp('3%'),
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('2%'),
    paddingHorizontal: spacing.lg,
    paddingVertical: hp('2%'),
    borderRadius: borderRadius.lg,
    backgroundColor: '#ffffff',
    ...shadowStyles.light,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  radioButtonText: {
    fontSize: fontSize(18, 17, 18, 19),
    color: '#495057',
    marginLeft: spacing.lg,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#212529',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('15%'),
    borderRadius: borderRadius.xl,
    marginTop: hp('5%'),
    ...shadowStyles.heavy,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: fontSize(20, 18, 20, 22),
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default styles;