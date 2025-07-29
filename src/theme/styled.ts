import { theme } from './theme';

export const createStyles = {
  button: {
    primary: {
      backgroundColor: theme.colors.primary[500],
      color: theme.colors.text.inverse,
      borderRadius: theme.borderRadius.md,
      padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      transition: `all ${theme.animation.duration[150]} ${theme.animation.easing.out}`,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.typography.fontFamily.primary,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.primary[500],
      border: `1px solid ${theme.colors.border.primary}`,
      borderRadius: theme.borderRadius.md,
      padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      transition: `all ${theme.animation.duration[150]} ${theme.animation.easing.out}`,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.typography.fontFamily.primary,
    }
  },
  card: {
    backgroundColor: theme.colors.surfaces.elevated,
    border: `1px solid ${theme.colors.border.primary}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[6],
    boxShadow: theme.shadows.sm,
    transition: `all ${theme.animation.duration[150]} ${theme.animation.easing.out}`,
  },
  input: {
    backgroundColor: theme.colors.surfaces.background,
    border: `1px solid ${theme.colors.border.primary}`,
    borderRadius: theme.borderRadius.md,
    padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
    fontSize: theme.typography.fontSize.sm,
    transition: `all ${theme.animation.duration[150]} ${theme.animation.easing.out}`,
    fontFamily: theme.typography.fontFamily.primary,
    outline: 'none',
    width: '100%',
    color: theme.colors.text.primary,
  }
};

export const hoverStyles = {
  button: {
    primary: {
      backgroundColor: theme.colors.primary[600],
      transform: 'translateY(-1px)',
    },
    secondary: {
      backgroundColor: theme.colors.surfaces.panel,
      borderColor: theme.colors.primary[500],
    }
  },
  card: {
    boxShadow: theme.shadows.md,
    transform: 'translateY(-2px)',
  },
  input: {
    borderColor: theme.colors.border.focus,
    boxShadow: `0 0 0 3px ${theme.colors.primary[500]}1a`,
  }
};

export const focusStyles = {
  input: {
    borderColor: theme.colors.border.focus,
    boxShadow: `0 0 0 3px ${theme.colors.primary[500]}1a`,
  }
};