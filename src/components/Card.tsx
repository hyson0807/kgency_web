import React from 'react';
import { useStyles } from '../theme/useStyles';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  hover = true,
  style,
  onMouseEnter,
  onMouseLeave,
  ...props 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const styles = useStyles();

  const baseStyles = styles.card;
  const hoverStyle = hover ? styles.hoverStyles.card : {};

  const cardStyle = {
    ...baseStyles,
    ...(isHovered && hover ? hoverStyle : {}),
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) setIsHovered(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};