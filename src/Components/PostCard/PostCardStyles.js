import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows, 
  isSmallDevice, colors, typography 
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[50],
    paddingTop: spacing.sm,
    paddingBottom: hp(12), // Space for tab bar
    paddingHorizontal: spacing.sm,
  },
  card: {
    marginBottom: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.gray[50],
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  userImage: {
    width: wp(12),
    height: wp(12),
    borderRadius: borderRadius.round,
    marginRight: spacing.md,
    borderWidth: 2,
    borderColor: colors.gray[200],
  },
  username: {
    fontSize: typography.h6,
    fontWeight: '700',
    color: colors.dark,
    flex: 1,
  },
  singleImageContainer: {
    alignItems: 'center',
    backgroundColor: colors.gray[100],
  },
  singleImage: {
    width: '100%',
    height: hp(isSmallDevice ? 35 : 40),
    resizeMode: 'cover',
  },
  carouselContainer: {
    position: 'relative',
    backgroundColor: colors.gray[100],
  },
  carouselImage: {
    width: wp(100) - spacing.md, // Account for container padding
    height: hp(isSmallDevice ? 35 : 40),
    resizeMode: 'cover',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: hp(isSmallDevice ? 35 : 40),
    backgroundColor: colors.black,
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
    borderRadius: borderRadius.round,
    padding: spacing.sm,
  },
  imageCounter: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: borderRadius.md,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  counterText: {
    color: colors.white,
    fontSize: fontSize(12),
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.xl,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
  },
  likeCount: {
    marginLeft: spacing.sm,
    fontSize: typography.body,
    color: colors.gray[700],
    fontWeight: '500',
  },
  commentCount: {
    marginLeft: spacing.sm,
    fontSize: typography.body,
    color: colors.gray[700],
    fontWeight: '500',
  },
  description: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: typography.body,
    color: colors.gray[800],
    lineHeight: fontSize(20),
  },
  noPostsText: {
    padding: spacing.xl,
    textAlign: 'center',
    fontSize: typography.h6,
    color: colors.gray[500],
    fontStyle: 'italic',
    marginTop: hp(20),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(20),
  },
});

export default styles;