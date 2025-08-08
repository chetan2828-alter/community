import { StyleSheet } from 'react-native';
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize
} from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xxxl,
    marginHorizontal: spacing.xl,
    minWidth: wp(75),
    alignItems: 'center',
    ...shadows.xl,
  },
  
  content: {
    alignItems: 'center',
  },
  
  successIcon: {
    backgroundColor: colors.success,
    borderRadius: borderRadius.round,
    width: wp(16),
    height: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
    ...shadows.md,
  },
  
  title: {
    fontSize: typography.title2,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.md,
    letterSpacing: -0.3,
  },
  
  subtitle: {
    fontSize: typography.body,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.body * 1.3,
    fontWeight: '400',
  },
});

export default styles;