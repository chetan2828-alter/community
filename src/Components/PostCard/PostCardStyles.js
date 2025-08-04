import { StyleSheet, Dimensions } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, isMediumDevice } from '../../utils/responsiveHelper';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F5',
    paddingTop: hp('1%'),
    paddingBottom: hp('10%'), // Space for tab bar
  },
  card: {
    marginBottom: hp('2.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.5%') },
    shadowOpacity: 0.15,
    shadowRadius: wp('1.5%'),
    elevation: 5,
    marginHorizontal: wp('3%'),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('3.5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    backgroundColor: '#FAFAFA',
  },
  userImage: {
    width: wp(isSmallDevice ? '12%' : '11%'),
    height: wp(isSmallDevice ? '12%' : '11%'),
    borderRadius: wp('6%'),
    marginRight: wp('3%'),
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  username: {
    fontSize: fontSize(17),
    fontWeight: '700',
    color: '#1A1A1A',
  },
  singleImageContainer: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  singleImage: {
    width: '100%',
    height: hp(isSmallDevice ? '35%' : '37%'),
    resizeMode: 'cover',
  },
  carouselContainer: {
    position: 'relative',
    backgroundColor: '#F0F0F0',
  },
  carouselImage: {
    width: screenWidth - wp('6%'), // Account for card margins
    height: hp(isSmallDevice ? '35%' : '37%'),
    resizeMode: 'cover',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: hp(isSmallDevice ? '35%' : '37%'),
    backgroundColor: '#000000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  muteButton: {
    position: 'absolute',
    bottom: wp('4%'),
    right: wp('4%'),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: wp('5%'),
    padding: wp('2%'),
  },
  imageCounter: {
    position: 'absolute',
    top: wp('3%'),
    right: wp('3%'),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: wp('3%'),
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('2.5%'),
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: fontSize(13),
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('3.5%'),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('6%'),
  },
  likeCount: {
    marginLeft: wp('1.5%'),
    fontSize: fontSize(14),
    color: '#4A4A4A',
    fontWeight: '500',
  },
  commentCount: {
    marginLeft: wp('1.5%'),
    fontSize: fontSize(14),
    color: '#4A4A4A',
    fontWeight: '500',
  },
  description: {
    paddingHorizontal: wp('3.5%'),
    paddingVertical: hp('1.2%'),
    fontSize: fontSize(15),
    color: '#333333',
    lineHeight: hp('2.7%'),
  },
  noPostsText: {
    padding: wp('5%'),
    textAlign: 'center',
    fontSize: fontSize(16),
    color: '#777777',
    fontStyle: 'italic',
    marginTop: hp('20%'),
  },
});

export default styles;