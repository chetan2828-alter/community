import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { 
  isSmallDevice, 
  fontSize, 
  spacing, 
  borderRadius,
  shadowStyles 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  loaderContainer: {
    padding: hp('2%'),
    alignItems: 'center',
  },
  flatListContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: hp('1%'),
  },
  rectangleCard: {
    paddingVertical: hp(isSmallDevice ? '1.5%' : '1.8%'),
    paddingHorizontal: wp(isSmallDevice ? '4%' : '5%'),
    borderRadius: borderRadius.lg,
    marginHorizontal: spacing.xs,
    minWidth: wp(isSmallDevice ? '20%' : '22%'),
    alignItems: 'center',
    justifyContent: 'center',
    ...shadowStyles.light,
  },
  activeCard: {
    backgroundColor: '#212529',
    borderWidth: 2,
    borderColor: '#ffffff',
    transform: [{ scale: 1.05 }],
  },
  inactiveCard: {
    backgroundColor: '#495057',
    borderWidth: 0,
  },
  cardText: {
    fontSize: fontSize(13, 12, 13, 14),
    color: '#ffffff',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default styles;