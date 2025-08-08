import { StyleSheet, Platform } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows, getSafeAreaTop,
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
    fontSize: typography.title1,
    fontWeight: '700',
    color: colors.text.primary,
    letterSpacing: -0.5,
  },
  
  postButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.xl,
    minWidth: wp(20),
    alignItems: 'center',
    ...shadows.sm,
  },
  
  postButtonDisabled: {
    backgroundColor: colors.gray[400],
    ...shadows.none,
  },
  
  postButtonText: {
    color: colors.white,
    fontSize: typography.subhead,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  
  scrollContainer: {
    flex: 1,
  },
  
  scrollContent: {
    paddingBottom: layout.tabBarHeight + spacing.xl,
  },
  
  section: {
    backgroundColor: colors.white,
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    ...shadows.md,
  },
  
  sectionTitle: {
    fontSize: typography.headline,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.lg,
    letterSpacing: -0.2,
  },
  
  // Image picker styles
  imagePicker: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.separator.nonOpaque,
    borderStyle: 'dashed',
  },
  
  imagePickerText: {
    fontSize: typography.title3,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: spacing.lg,
    letterSpacing: -0.2,
  },
  
  imagePickerSubtext: {
    fontSize: typography.subhead,
    color: colors.text.tertiary,
    marginTop: spacing.sm,
    fontWeight: '500',
  },
  
  imageScrollContainer: {
    paddingVertical: spacing.sm,
  },
  
  imageContainer: {
    position: 'relative',
    marginRight: spacing.md,
  },
  
  selectedImage: {
    width: wp(25),
    height: wp(25),
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.secondary,
  },
  
  removeImageButton: {
    position: 'absolute',
    top: -spacing.sm,
    right: -spacing.sm,
    backgroundColor: colors.danger,
    borderRadius: borderRadius.round,
    width: wp(6),
    height: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    ...shadows.md,
  },
  
  addMoreButton: {
    width: wp(25),
    height: wp(25),
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.secondary,
    borderWidth: 2,
    borderColor: colors.separator.nonOpaque,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Input styles
  captionInput: {
    ...inputStyles.default,
    height: hp(15),
    textAlignVertical: 'top',
    paddingTop: spacing.lg,
    fontSize: typography.body,
    lineHeight: typography.body * 1.4,
  },
  
  input: {
    ...inputStyles.default,
    fontSize: typography.body,
  },
  
  characterCount: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    textAlign: 'right',
    marginTop: spacing.sm,
    fontWeight: '500',
  },
  
  // Picker styles
  pickerContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.separator.nonOpaque,
    overflow: 'hidden',
  },
  
  pickerInput: {
    fontSize: typography.body,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingRight: spacing.xxxl,
    color: colors.text.primary,
    fontWeight: '500',
  },
  
  pickerIcon: {
    position: 'absolute',
    right: spacing.lg,
    top: '50%',
    marginTop: -iconSize.md / 2,
  },
  
  loadingContainer: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
  },
  
  // Privacy section
  privacyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
  },
  
  privacyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  privacyTextContainer: {
    marginLeft: spacing.md,
    flex: 1,
  },
  
  privacyTitle: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  
  privacySubtitle: {
    fontSize: typography.caption1,
    color: colors.text.tertiary,
    fontWeight: '500',
  },
});

export default styles;