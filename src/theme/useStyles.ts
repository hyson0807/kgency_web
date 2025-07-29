import { useTheme } from './ThemeProvider';

export const useStyles = () => {
  const { currentTheme } = useTheme();

  return {
    button: {
      primary: {
        backgroundColor: currentTheme.colors.primary[500],
        color: currentTheme.colors.text.inverse,
        borderRadius: currentTheme.borderRadius.md,
        padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
        fontSize: currentTheme.typography.fontSize.sm,
        fontWeight: currentTheme.typography.fontWeight.medium,
        transition: `all ${currentTheme.animation.duration[150]} ${currentTheme.animation.easing.out}`,
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: currentTheme.typography.fontFamily.primary,
      },
      secondary: {
        backgroundColor: 'transparent',
        color: currentTheme.colors.primary[500],
        border: `1px solid ${currentTheme.colors.border.primary}`,
        borderRadius: currentTheme.borderRadius.md,
        padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
        fontSize: currentTheme.typography.fontSize.sm,
        fontWeight: currentTheme.typography.fontWeight.medium,
        transition: `all ${currentTheme.animation.duration[150]} ${currentTheme.animation.easing.out}`,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: currentTheme.typography.fontFamily.primary,
      }
    },
    card: {
      backgroundColor: currentTheme.colors.surfaces.elevated,
      border: `1px solid ${currentTheme.colors.border.primary}`,
      borderRadius: currentTheme.borderRadius.lg,
      padding: currentTheme.spacing[6],
      boxShadow: currentTheme.shadows.sm,
      transition: `all ${currentTheme.animation.duration[150]} ${currentTheme.animation.easing.out}`,
    },
    input: {
      backgroundColor: currentTheme.colors.surfaces.background,
      border: `1px solid ${currentTheme.colors.border.primary}`,
      borderRadius: currentTheme.borderRadius.md,
      padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[3]}`,
      fontSize: currentTheme.typography.fontSize.sm,
      transition: `all ${currentTheme.animation.duration[150]} ${currentTheme.animation.easing.out}`,
      fontFamily: currentTheme.typography.fontFamily.primary,
      outline: 'none',
      width: '100%',
      color: currentTheme.colors.text.primary,
    },
    hoverStyles: {
      button: {
        primary: {
          backgroundColor: currentTheme.colors.primary[600],
          transform: 'translateY(-1px)',
        },
        secondary: {
          backgroundColor: currentTheme.colors.surfaces.panel,
          border: `1px solid ${currentTheme.colors.primary[500]}`,
        }
      },
      card: {
        boxShadow: currentTheme.shadows.md,
        transform: 'translateY(-2px)',
      },
      input: {
        border: `1px solid ${currentTheme.colors.border.focus}`,
        boxShadow: `0 0 0 3px ${currentTheme.colors.primary[500]}1a`,
      }
    },
    focusStyles: {
      input: {
        border: `1px solid ${currentTheme.colors.border.focus}`,
        boxShadow: `0 0 0 3px ${currentTheme.colors.primary[500]}1a`,
      }
    }
  };
};