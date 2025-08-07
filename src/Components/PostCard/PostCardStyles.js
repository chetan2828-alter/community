import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows, 
  colors, typography, iconSize, layout
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.grouped,
    paddingTop: spacing.md,
    paddingBottom: layout.tabBarHeight + spacing.xl,
  },
  
  card: {
    backgroundColor: colors.white,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.md,
  },
  
  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
  },
  
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  userImage: {
    width: layout.avatarSizes.md,
    height: layout.avatarSizes.md,
    borderRadius: borderRadius.round,
    marginRight: spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator.nonOpaque,
  },
  
  userDetails: {
    flex: 1,
  },
  
  username: {
    fontSize: typography.headline,
    fontWeight: '600',
    color: colors.text.primary,
    letterSpacing: -0.2,
    marginBottom: spacing.xs,
  },
  
  timestamp: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    fontWeight: '500',
  },
  
  moreButton: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.fill.primary,
  },
  
  // Media content styles
  singleImageContainer: {
    backgroundColor: colors.background.secondary,
    overflow: 'hidden',
  },
  
  singleImage: {
    width: '100%',
    height: hp(50),
    resizeMode: 'cover',
  },
  
  carouselContainer: {
    position: 'relative',
    backgroundColor: colors.background.secondary,
  },
  
  carouselImage: {
    width: wp(100) - (spacing.lg * 2),
    height: hp(50),
    resizeMode: 'cover',
  },
  
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: hp(50),
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  video: {
    width: '100%',
    height: '100%',
  },
  
  muteButton: {
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: borderRadius.round,
    padding: spacing.md,
    ...shadows.lg,
  },
  
  imageCounter: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    ...shadows.md,
  },
  
  counterText: {
    color: colors.white,
    fontSize: typography.caption1,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  
  // Actions section
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
  },
  
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    marginRight: spacing.lg,
    minWidth: wp(16),
    justifyContent: 'center',
  },
  
  likeButtonActive: {
    backgroundColor: colors.danger + '15',
  },
  
  commentButton: {
    backgroundColor: colors.fill.secondary,
  },
  
  shareButton: {
    backgroundColor: colors.fill.tertiary,
    marginLeft: 'auto',
    marginRight: 0,
  },
  
  likeCount: {
    marginLeft: spacing.sm,
    fontSize: typography.subhead,
    color: colors.text.secondary,
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  
  commentCount: {
    marginLeft: spacing.sm,
    fontSize: typography.subhead,
    color: colors.text.secondary,
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  
  // Engagement section
  engagementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator.nonOpaque,
  },
  
  engagementText: {
    fontSize: typography.subhead,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  
  viewComments: {
    fontSize: typography.subhead,
    color: colors.text.tertiary,
    fontWeight: '500',
  },
  
  // Content section
  contentSection: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.white,
  },
  
  description: {
    fontSize: typography.body,
    color: colors.text.primary,
    lineHeight: typography.body * 1.4,
    letterSpacing: -0.2,
  },
  
  usernameInContent: {
    fontWeight: '600',
    color: colors.text.primary,
  },
  
  readMore: {
    color: colors.primary,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
  
  // Loading states
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(30),
    backgroundColor: colors.background.grouped,
  },
  
  loadingText: {
    marginTop: spacing.xl,
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  
  noPostsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(25),
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.background.grouped,
  },
  
  noPostsText: {
    fontSize: typography.title2,
    color: colors.text.secondary,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: -0.3,
    marginTop: spacing.xl,
  },
  
  noPostsSubtext: {
    fontSize: typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: typography.body * 1.3,
    fontWeight: '400',
  },
});

export default styles;