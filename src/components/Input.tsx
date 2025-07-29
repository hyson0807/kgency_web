import React from 'react';
import { useStyles } from '../theme/useStyles';
import { useTheme } from '../theme/ThemeProvider';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label,
  error,
  style,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  ...props 
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const styles = useStyles();
  const { currentTheme } = useTheme();

  const baseStyles = styles.input;
  const hoverStyle = styles.hoverStyles.input;
  const focusStyle = styles.focusStyles.input;

  const inputStyle = {
    ...baseStyles,
    ...(isHovered && !isFocused ? hoverStyle : {}),
    ...(isFocused ? focusStyle : {}),
    ...(error ? { borderColor: '#cf222e' } : {}),
    ...style,
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      {label && (
        <label style={{ 
          fontSize: currentTheme.typography.fontSize.sm, 
          fontWeight: currentTheme.typography.fontWeight.medium, 
          color: currentTheme.colors.text.primary,
          fontFamily: currentTheme.typography.fontFamily.primary
        }}>
          {label}
        </label>
      )}
      <input
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
      {error && (
        <span style={{ 
          fontSize: currentTheme.typography.fontSize.xs, 
          color: currentTheme.colors.semantic.error,
          fontFamily: currentTheme.typography.fontFamily.primary
        }}>
          {error}
        </span>
      )}
    </div>
  );
};