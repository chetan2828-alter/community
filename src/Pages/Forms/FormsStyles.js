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
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.primary,
    letterSpacing: -0.2,
  },
  
  stepIndicator: {
    fontSize: typography.subhead,
    color: colors.text.tertiary,
    fontWeight: '500',
  },
  
  progressContainer: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
  },
  
  progressTrack: {
    height: spacing.sm,
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xs,
    overflow: 'hidden',
  },
  
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xs,
  },
  
  stepHeader: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    backgroundColor: colors.white,
    marginBottom: spacing.lg,
  },
  
  stepTitle: {
    fontSize: typography.title2,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.sm,
    letterSpacing: -0.3,
  },
  
  stepSubtitle: {
    fontSize: typography.body,
    color: colors.text.secondary,
    fontWeight: '400',
    lineHeight: typography.body * 1.3,
  },
  
  scrollContainer: {
    flex: 1,
  },
  
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  
  stepContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    ...shadows.md,
  },
  
  inputGroup: {
    marginBottom: spacing.xl,
  },
  
  label: {
    fontSize: typography.subhead,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.md,
    letterSpacing: -0.1,
  },
  
  input: {
    ...inputStyles.default,
    fontSize: typography.body,
    fontWeight: '400',
  },
  
  textArea: {
    height: hp(12),
    textAlignVertical: 'top',
    paddingTop: spacing.lg,
  },
  
  nameRow: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  
  nameInput: {
    flex: 1,
  },
  
  // Gender selection
  genderContainer: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  
  genderOption: {
    flex: 1,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.background.secondary,
    borderWidth: 2,
    borderColor: colors.separator.nonOpaque,
    alignItems: 'center',
    ...shadows.xs,
  },
  
  genderOptionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
  },
  
  genderText: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.text.secondary,
    letterSpacing: 0.1,
  },
  
  genderTextSelected: {
    color: colors.white,
  },
  
  // Picker styles
  pickerContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    overflow: 'hidden',
  },
  
  picker: {
    height: layout.inputHeight,
    color: colors.text.primary,
  },
  
  // Navigation
  navigationContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? getSafeAreaBottom() : spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator.nonOpaque,
    gap: spacing.lg,
    ...shadows.lg,
  },
  
  primaryButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  
  primaryButtonFull: {
    flex: 1,
  },
  
  primaryButtonText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    ...shadows.xs,
  },
  
  secondaryButtonText: {
    color: colors.text.primary,
    fontSize: typography.body,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
});

export default styles;