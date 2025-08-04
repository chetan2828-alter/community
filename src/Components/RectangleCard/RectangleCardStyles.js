// components/RectangleCard/RectangleCardStyles.js
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { isSmallDevice, fontSize } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  loaderContainer: {
    padding: hp(isSmallDevice ? '1%' : '1.5%'),
    alignItems: 'center',
  },
  flatListContainer: {
    paddingHorizontal: wp(isSmallDevice ? '2%' : '3%'),
    paddingVertical: hp(isSmallDevice ? '1%' : '1%'),
  },
  rectangleCard: {
    paddingVertical: hp(isSmallDevice ? '1.5%' : '1.3%'),
    paddingHorizontal: wp(isSmallDevice ? '3%' : '4%'),
    borderRadius: wp(isSmallDevice ? '2.5%' : '3%'),
    marginHorizontal: wp('1.2%'),
    minWidth: wp(isSmallDevice ? '18%' : '20%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCard: {
    backgroundColor: '#000000',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  inactiveCard: {
    backgroundColor: '#000000',
    borderWidth: 0,
  },
  cardText: {
    fontSize: fontSize(wp('3.2%'), wp('3.2%'), wp('3.6%')), // Small / Medium / Large
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
