import React from 'react';
import { useStyles } from '../theme/useStyles';
import { useTheme } from '../theme/ThemeProvider';
import { Badge } from './Badge';

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  };
  footer?: React.ReactNode;
  hover?: boolean;
  imageHeight?: number;
  children?: React.ReactNode;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  imageAlt = '',
  title,
  description,
  badge,
  footer,
  hover = true,
  imageHeight = 200,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const styles = useStyles();
  const { currentTheme } = useTheme();

  const baseStyles = styles.card;
  const hoverStyle = hover ? styles.hoverStyles.card : {};

  const cardStyle = {
    ...baseStyles,
    ...(isHovered && hover ? hoverStyle : {}),
    padding: '0',
    overflow: 'hidden',
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
      {/* Image Section */}
      {image && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: `${imageHeight}px`,
            backgroundColor: currentTheme.colors.surfaces.panel,
            overflow: 'hidden',
          }}
        >
          {!imageLoaded && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: currentTheme.colors.surfaces.panel,
                color: currentTheme.colors.text.tertiary,
                fontSize: currentTheme.typography.fontSize.sm,
              }}
            >
              Loading...
            </div>
          )}
          <img
            src={image}
            alt={imageAlt}
            onLoad={() => setImageLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              opacity: imageLoaded ? 1 : 0,
            }}
          />
          
          {/* Badge Overlay */}
          {badge && (
            <div
              style={{
                position: 'absolute',
                top: currentTheme.spacing[3],
                right: currentTheme.spacing[3],
              }}
            >
              <Badge variant={badge.variant} size="sm">
                {badge.text}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div
        style={{
          padding: currentTheme.spacing[6],
        }}
      >
        {title && (
          <h3
            style={{
              fontSize: currentTheme.typography.fontSize.lg,
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              fontFamily: currentTheme.typography.fontFamily.primary,
              margin: 0,
              marginBottom: description || children ? currentTheme.spacing[2] : 0,
            }}
          >
            {title}
          </h3>
        )}

        {description && (
          <p
            style={{
              fontSize: currentTheme.typography.fontSize.sm,
              color: currentTheme.colors.text.secondary,
              lineHeight: currentTheme.typography.lineHeight.relaxed,
              fontFamily: currentTheme.typography.fontFamily.primary,
              margin: 0,
              marginBottom: children || footer ? currentTheme.spacing[4] : 0,
            }}
          >
            {description}
          </p>
        )}

        {children && (
          <div style={{ marginBottom: footer ? currentTheme.spacing[4] : 0 }}>
            {children}
          </div>
        )}

        {footer && (
          <div
            style={{
              paddingTop: currentTheme.spacing[4],
              borderTop: `1px solid ${currentTheme.colors.border.secondary}`,
              marginTop: currentTheme.spacing[4],
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};