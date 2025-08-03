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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: spacing.xl,
    paddingTop: getSafeAreaPadding().top + hp('5%'),
  },
  title: {
    fontSize: fontSize(36, 32, 36, 40),
    fontWeight: '900',
    color: '#212529',
    marginBottom: hp('6%'),
    textAlign: 'center',
    letterSpacing: 1.2,
    lineHeight: hp('5%'),
  },
  pickerContainer: {
    height: hp('8%'),
    width: wp('85%'),
    backgroundColor: '#ffffff',
    borderRadius: borderRadius.xl,
    borderColor: '#212529',
    borderWidth: 2,
    marginBottom: hp('5%'),
    paddingHorizontal: spacing.lg,
    paddingVertical: hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    ...shadowStyles.medium,
  },
  icon: {
    marginRight: spacing.md,
  },
  picker: {
    flex: 1,
    height: hp('7%'),
    color: '#212529',
    fontSize: fontSize(16, 15, 16, 17),
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#212529',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('12%'),
    borderRadius: borderRadius.xl,
    marginBottom: hp('3%'),
    ...shadowStyles.heavy,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: fontSize(18, 17, 18, 19),
    letterSpacing: 0.5,
  },
  changeLanguageButton: {
    backgroundColor: '#e9ecef',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('10%'),
    borderRadius: borderRadius.lg,
    marginTop: hp('3%'),
    ...shadowStyles.light,
  },
  changeLanguageText: {
    fontSize: fontSize(16, 15, 16, 17),
    color: '#212529',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;