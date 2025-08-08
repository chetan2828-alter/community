import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows, getSafeAreaBottom,
  colors, typography, iconSize, layout, inputStyles
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.grouped,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  backButton: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.fill.primary,
  },
  
  headerTitle: {
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.primary,
    letterSpacing: -0.2,
  },
  
  headerSpacer: {
    width: wp(12), // Same width as back button for centering
  },
  
  commentsList: {
    paddingVertical: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    alignItems: 'flex-start',
  },
  
  avatarContainer: {
    marginRight: spacing.md,
  },
  
  avatar: {
    width: layout.avatarSizes.sm,
    height: layout.avatarSizes.sm,
    borderRadius: borderRadius.round,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator.nonOpaque,
  },
  
  commentContent: {
    flex: 1,
    marginRight: spacing.md,
  },
  
  commentBubble: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    ...shadows.xs,
  },
  
  username: {
    fontSize: typography.subhead,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.xs,
    letterSpacing: -0.1,
  },
  
  commentText: {
    fontSize: typography.body,
    color: colors.text.primary,
    lineHeight: typography.body * 1.3,
    fontWeight: '400',
  },
  
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  
  timestamp: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    fontWeight: '500',
  },
  
  replyButton: {
    paddingVertical: spacing.xs,
  },
  
  replyText: {
    fontSize: typography.caption1,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  
  deleteButton: {
    paddingVertical: spacing.xs,
  },
  
  deleteText: {
    fontSize: typography.caption1,
    color: colors.danger,
    fontWeight: '600',
  },
  
  likeButton: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Empty state
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxxxl * 2,
    paddingHorizontal: spacing.xl,
  },
  
  emptyText: {
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    letterSpacing: -0.2,
  },
  
  emptySubtext: {
    fontSize: typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    lineHeight: typography.body * 1.3,
    fontWeight: '400',
  },
  
  // Input container
  inputContainer: {
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator.nonOpaque,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? getSafeAreaBottom() : spacing.lg,
    ...shadows.lg,
  },
  
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    maxHeight: hp(15),
  },
  
  emojiButton: {
    padding: spacing.sm,
    marginRight: spacing.sm,
    borderRadius: borderRadius.lg,
  },
  
  textInput: {
    flex: 1,
    fontSize: typography.body,
    color: colors.text.primary,
    maxHeight: hp(12),
    paddingVertical: spacing.md,
    fontWeight: '400',
    lineHeight: typography.body * 1.3,
  },
  
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.round,
    padding: spacing.md,
    marginLeft: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.sm,
  },
  
  sendButtonDisabled: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
});

export default styles;