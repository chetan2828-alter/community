import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { 
  isSmallDevice, 
  spacing, 
  borderRadius, 
  shadowStyles,
  getSafeAreaPadding 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212529',
    paddingHorizontal: spacing.md,
    paddingTop: getSafeAreaPadding().top,
    paddingBottom: hp('2%'),
    ...shadowStyles.heavy,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  profileContainer: {
    width: wp(isSmallDevice ? '13%' : '12%'),
    height: wp(isSmallDevice ? '13%' : '12%'),
    borderRadius: wp('7%'),
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffd700',
    marginLeft: spacing.sm,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp('6%'),
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.xl,
    paddingVertical: hp('0.8%'),
    paddingHorizontal: spacing.md,
  },
  iconContainer: {
    paddingHorizontal: spacing.sm,
    paddingVertical: hp('0.8%'),
    borderRadius: borderRadius.md,
    marginHorizontal: spacing.xs,
  },
});

export default styles;