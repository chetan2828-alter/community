import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize, layout
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.grouped,
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.grouped,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  headerTitle: {
    fontSize: typography.title1,
    fontWeight: '700',
    color: colors.text.primary,
    letterSpacing: -0.5,
  },
  
  settingsButton: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.fill.primary,
  },
  
  scrollContainer: {
    flex: 1,
  },
  
  scrollContent: {
    paddingBottom: layout.tabBarHeight + spacing.xl,
  },
  
  // Profile header
  profileHeader: {
    backgroundColor: colors.white,
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    ...shadows.md,
  },
  
  avatarContainer: {
    position: 'relative',
    marginBottom: spacing.xl,
  },
  
  avatar: {
    width: layout.avatarSizes.xl * 1.5,
    height: layout.avatarSizes.xl * 1.5,
    borderRadius: borderRadius.round,
    borderWidth: 4,
    borderColor: colors.white,
    ...shadows.lg,
  },
  
  editAvatarButton: {
    position: 'absolute',
    bottom: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.round,
    width: wp(8),
    height: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.white,
    ...shadows.md,
  },
  
  displayName: {
    fontSize: typography.title1,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.sm,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  
  ageText: {
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '500',
    marginBottom: spacing.xl,
  },
  
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    ...shadows.xs,
  },
  
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  
  statNumber: {
    fontSize: typography.title2,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.xs,
    letterSpacing: -0.2,
  },
  
  statLabel: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  statDivider: {
    width: StyleSheet.hairlineWidth,
    height: hp(4),
    backgroundColor: colors.separator.nonOpaque,
    marginHorizontal: spacing.lg,
  },
  
  editProfileButton: {
    backgroundColor: colors.background.secondary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxxl,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  editProfileText: {
    fontSize: typography.subhead,
    fontWeight: '600',
    color: colors.text.primary,
    letterSpacing: 0.1,
  },
  
  // Details cards
  detailsCard: {
    backgroundColor: colors.white,
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    ...shadows.md,
  },
  
  cardTitle: {
    fontSize: typography.title3,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.lg,
    letterSpacing: -0.2,
  },
  
  detailsGrid: {
    gap: spacing.lg,
  },
  
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  
  detailIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: borderRadius.lg,
    backgroundColor: colors.fill.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  
  detailContent: {
    flex: 1,
  },
  
  detailLabel: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.xs,
  },
  
  detailValue: {
    fontSize: typography.body,
    color: colors.text.primary,
    fontWeight: '500',
    letterSpacing: -0.1,
  },
  
  // Tab navigation
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.sm,
    ...shadows.md,
  },
  
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    gap: spacing.sm,
  },
  
  activeTab: {
    backgroundColor: colors.primary,
    ...shadows.sm,
  },
  
  tabText: {
    fontSize: typography.subhead,
    fontWeight: '600',
    color: colors.text.tertiary,
    letterSpacing: 0.1,
  },
  
  activeTabText: {
    color: colors.white,
  },
  
  // Posts grid
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.xs,
  },
  
  postThumbnail: {
    width: (wp(100) - spacing.lg * 2 - spacing.xs * 2) / 3,
    height: (wp(100) - spacing.lg * 2 - spacing.xs * 2) / 3,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    backgroundColor: colors.background.secondary,
    position: 'relative',
  },
  
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  multipleImagesIndicator: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: borderRadius.sm,
    padding: spacing.xs,
  },
  
  noPostsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxxxl,
    paddingHorizontal: spacing.xl,
  },
  
  noPostsText: {
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    letterSpacing: -0.2,
  },
  
  noPostsSubtext: {
    fontSize: typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    lineHeight: typography.body * 1.3,
    fontWeight: '400',
  },
});

export default styles;