import React from 'react';
import { useStyles } from '../theme/useStyles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  style,
  onMouseEnter,
  onMouseLeave,
  ...props 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const styles = useStyles();

  const baseStyles = styles.button[variant];
  const hoverStyle = styles.hoverStyles.button[variant];

  const sizeStyles = {
    sm: { fontSize: '0.75rem', padding: '0.375rem 0.75rem' },
    md: { fontSize: '0.875rem', padding: '0.5rem 1rem' },
    lg: { fontSize: '1rem', padding: '0.75rem 1.5rem' }
  };

  const buttonStyle = {
    ...baseStyles,
    ...sizeStyles[size],
    ...(isHovered ? hoverStyle : {}),
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};