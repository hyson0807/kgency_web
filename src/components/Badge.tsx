import React from 'react';
import { theme } from '../theme/theme';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  style,
  ...props 
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: theme.colors.primary[100],
      color: theme.colors.primary[700],
      border: `1px solid ${theme.colors.primary[200]}`,
    },
    secondary: {
      backgroundColor: theme.colors.neutral[100],
      color: theme.colors.neutral[700],
      border: `1px solid ${theme.colors.neutral[200]}`,
    },
    success: {
      backgroundColor: '#f0fff4',
      color: theme.colors.semantic.success,
      border: '1px solid #bbf7d0',
    },
    warning: {
      backgroundColor: '#fef3c7',
      color: '#92400e',
      border: '1px solid #fde68a',
    },
    error: {
      backgroundColor: '#fef2f2',
      color: theme.colors.semantic.error,
      border: '1px solid #fecaca',
    },
    info: {
      backgroundColor: '#eff6ff',
      color: theme.colors.semantic.info,
      border: '1px solid #bfdbfe',
    }
  };

  const sizeStyles = {
    sm: { 
      fontSize: theme.typography.fontSize.xs, 
      padding: `${theme.spacing[1]} ${theme.spacing[2]}` 
    },
    md: { 
      fontSize: theme.typography.fontSize.sm, 
      padding: `${theme.spacing[1]} ${theme.spacing[3]}` 
    },
    lg: { 
      fontSize: theme.typography.fontSize.base, 
      padding: `${theme.spacing[2]} ${theme.spacing[4]}` 
    }
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: theme.borderRadius.full,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <span style={badgeStyle} {...props}>
      {children}
    </span>
  );
};