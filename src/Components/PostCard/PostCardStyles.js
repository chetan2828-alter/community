import { StyleSheet, Dimensions } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, spacing, borderRadius, shadowStyles } from '../../utils/responsiveHelper';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    paddingTop: hp('1%'),
    paddingBottom: hp('12%'), // Space for tab bar
  },
  card: {
    marginBottom: hp('2.5%'),
    backgroundColor: '#ffffff',
    borderRadius: borderRadius.lg,
    ...shadowStyles.medium,
    marginHorizontal: spacing.md,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
    backgroundColor: '#ffffff',
  },
  userImage: {
    width: wp(isSmallDevice ? '12%' : '11%'),
    height: wp(isSmallDevice ? '12%' : '11%'),
    borderRadius: wp('6%'),
    marginRight: spacing.md,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  username: {
    fontSize: fontSize(17, 16, 17, 18),
    fontWeight: '700',
    color: '#212529',
  },
  singleImageContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  singleImage: {
    width: '100%',
    height: hp(isSmallDevice ? '35%' : '40%'),
    resizeMode: 'cover',
  },
  carouselContainer: {
    position: 'relative',
    backgroundColor: '#f8f9fa',
  },
  carouselImage: {
    width: screenWidth - wp('8%'), // Account for card margins
    height: hp(isSmallDevice ? '35%' : '40%'),
    resizeMode: 'cover',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: hp(isSmallDevice ? '35%' : '40%'),
    backgroundColor: '#000000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  muteButton: {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: borderRadius.lg,
    padding: spacing.sm,
  },
  imageCounter: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: borderRadius.md,
    paddingVertical: hp('0.5%'),
    paddingHorizontal: spacing.sm,
  },
  counterText: {
    color: '#ffffff',
    fontSize: fontSize(13, 12, 13, 14),
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: spacing.md,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f1f3f4',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.lg,
    paddingVertical: hp('0.5%'),
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  likeCount: {
    marginLeft: spacing.xs,
    fontSize: fontSize(14, 13, 14, 15),
    color: '#495057',
    fontWeight: '500',
  },
  commentCount: {
    marginLeft: spacing.xs,
    fontSize: fontSize(14, 13, 14, 15),
    color: '#495057',
    fontWeight: '500',
  },
  description: {
    paddingHorizontal: spacing.md,
    paddingVertical: hp('1.5%'),
    fontSize: fontSize(15, 14, 15, 16),
    color: '#343a40',
    lineHeight: hp('2.8%'),
  },
  noPostsText: {
    padding: spacing.lg,
    textAlign: 'center',
    fontSize: fontSize(16, 15, 16, 17),
    color: '#6c757d',
    fontStyle: 'italic',
    marginTop: hp('25%'),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('25%'),
  },
});

export default styles;