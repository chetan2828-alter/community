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
  
  loadingText: {
    marginTop: spacing.lg,
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.background.grouped,
  },
  
  errorText: {
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  
  retryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    ...shadows.md,
  },
  
  retryText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '600',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.primary,
    ...shadows.lg,
  },
  
  backButton: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  
  headerTitle: {
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.white,
    letterSpacing: -0.2,
  },
  
  moreButton: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  
  scrollContainer: {
    flex: 1,
  },
  
  scrollContent: {
    paddingBottom: spacing.xxxl,
  },
  
  // Profile header
  profileHeader: {
    backgroundColor: colors.white,
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    marginTop: -spacing.xl,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    ...shadows.lg,
  },
  
  avatarContainer: {
    position: 'relative',
    marginBottom: spacing.xl,
  },
  
  avatar: {
    width: layout.avatarSizes.xl * 1.8,
    height: layout.avatarSizes.xl * 1.8,
    borderRadius: borderRadius.round,
    borderWidth: 4,
    borderColor: colors.white,
    ...shadows.lg,
  },
  
  verifiedBadge: {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    backgroundColor: colors.success,
    borderRadius: borderRadius.round,
    width: wp(8),
    height: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.white,
    ...shadows.md,
  },
  
  name: {
    fontSize: typography.title1,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.md,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  
  basicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  ageText: {
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  
  genderText: {
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '500',
    marginHorizontal: spacing.sm,
  },
  
  statusText: {
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  
  communityBadge: {
    backgroundColor: colors.background.secondary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  communityText: {
    fontSize: typography.subhead,
    color: colors.text.primary,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  
  actionButtons: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.lg,
  },
  
  primaryActionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    ...shadows.md,
  },
  
  primaryActionText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  
  secondaryActionButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  
  // Info cards
  infoCard: {
    backgroundColor: colors.white,
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    ...shadows.md,
  },
  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  
  cardTitle: {
    fontSize: typography.title3,
    fontWeight: '700',
    color: colors.text.primary,
    letterSpacing: -0.2,
  },
  
  familyTreeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    gap: spacing.sm,
    ...shadows.xs,
  },
  
  familyTreeText: {
    fontSize: typography.caption1,
    color: colors.primary,
    fontWeight: '600',
  },
  
  infoGrid: {
    gap: spacing.lg,
  },
  
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  
  infoIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: borderRadius.lg,
    backgroundColor: colors.fill.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  
  infoContent: {
    flex: 1,
  },
  
  infoLabel: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.xs,
  },
  
  infoValue: {
    fontSize: typography.body,
    color: colors.text.primary,
    fontWeight: '500',
    letterSpacing: -0.1,
  },
  
  aboutText: {
    fontSize: typography.body,
    color: colors.text.secondary,
    lineHeight: typography.body * 1.4,
    fontWeight: '400',
    letterSpacing: -0.1,
  },
  
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    marginHorizontal: spacing.xl,
    maxHeight: hp(70),
    width: wp(90),
    ...shadows.xl,
  },
  
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  
  modalTitle: {
    fontSize: typography.title2,
    fontWeight: '700',
    color: colors.text.primary,
    letterSpacing: -0.3,
  },
  
  closeButton: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.fill.primary,
  },
  
  // Family tree
  treeContainer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  
  treeLevel: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.xl,
    marginVertical: spacing.lg,
  },
  
  treeConnector: {
    width: 2,
    height: spacing.xl,
    backgroundColor: colors.separator.opaque,
    alignSelf: 'center',
  },
  
  treeNode: {
    backgroundColor: colors.background.secondary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.separator.nonOpaque,
    minWidth: wp(25),
    alignItems: 'center',
    ...shadows.xs,
  },
  
  treeNodeHighlighted: {
    backgroundColor: colors.primary + '15',
    borderColor: colors.primary,
  },
  
  treeNodeCurrent: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
  },
  
  treeNodeText: {
    fontSize: typography.caption1,
    color: colors.text.secondary,
    fontWeight: '600',
    textAlign: 'center',
  },
  
  treeNodeTextHighlighted: {
    color: colors.primary,
  },
  
  treeNodeTextCurrent: {
    color: colors.white,
  },
});

export default styles;