import React from 'react';
import { useStyles } from '../theme/useStyles';
import { useTheme } from '../theme/ThemeProvider';
import { Badge } from './Badge';

export interface AppStoreCardProps extends React.HTMLAttributes<HTMLDivElement> {
  platform: 'ios' | 'android' | 'web';
  appName: string;
  description?: string;
  rating?: {
    score: number;
    count: string;
  };
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  };
  downloadUrl: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'button' | 'card';
  hover?: boolean;
}

export const AppStoreCard: React.FC<AppStoreCardProps> = ({
  platform,
  appName,
  description,
  rating,
  badge,
  downloadUrl,
  size = 'md',
  variant = 'card',
  hover = true,
  style,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const styles = useStyles();
  const { currentTheme } = useTheme();

  const platformConfig = {
    ios: {
      name: 'App Store',
      icon: '🍎',
      background: '#000000',
      color: '#ffffff',
      subtitle: 'Download on the',
    },
    android: {
      name: 'Google Play',
      icon: '🤖',
      background: '#01875f',
      color: '#ffffff', 
      subtitle: 'Get it on',
    },
    web: {
      name: 'Web App',
      icon: '🌐',
      background: currentTheme.colors.primary[600],
      color: '#ffffff',
      subtitle: 'Launch',
    },
  };

  const sizeConfig = {
    sm: {
      padding: variant === 'button' ? `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}` : currentTheme.spacing[4],
      iconSize: variant === 'button' ? '20px' : '32px',
      titleSize: variant === 'button' ? currentTheme.typography.fontSize.sm : currentTheme.typography.fontSize.lg,
      subtitleSize: variant === 'button' ? currentTheme.typography.fontSize.xs : currentTheme.typography.fontSize.sm,
      descriptionSize: currentTheme.typography.fontSize.sm,
      minHeight: variant === 'button' ? '44px' : 'auto',
    },
    md: {
      padding: variant === 'button' ? `${currentTheme.spacing[3]} ${currentTheme.spacing[6]}` : currentTheme.spacing[6],
      iconSize: variant === 'button' ? '24px' : '48px',
      titleSize: variant === 'button' ? currentTheme.typography.fontSize.base : currentTheme.typography.fontSize.xl,
      subtitleSize: variant === 'button' ? currentTheme.typography.fontSize.sm : currentTheme.typography.fontSize.base,
      descriptionSize: currentTheme.typography.fontSize.base,
      minHeight: variant === 'button' ? '52px' : 'auto',
    },
    lg: {
      padding: variant === 'button' ? `${currentTheme.spacing[4]} ${currentTheme.spacing[8]}` : currentTheme.spacing[8],
      iconSize: variant === 'button' ? '28px' : '64px',
      titleSize: variant === 'button' ? currentTheme.typography.fontSize.lg : currentTheme.typography.fontSize['2xl'],
      subtitleSize: variant === 'button' ? currentTheme.typography.fontSize.base : currentTheme.typography.fontSize.lg,
      descriptionSize: currentTheme.typography.fontSize.lg,
      minHeight: variant === 'button' ? '60px' : 'auto',
    },
  };

  const config = sizeConfig[size];
  const platformInfo = platformConfig[platform];

  const getVariantStyles = () => {
    if (variant === 'button') {
      return {
        backgroundColor: platformInfo.background,
        color: platformInfo.color,
        border: 'none',
        borderRadius: currentTheme.borderRadius.lg,
        padding: config.padding,
        minHeight: config.minHeight,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: currentTheme.spacing[3],
        textAlign: 'left' as const,
        transition: 'all 0.2s ease',
        textDecoration: 'none',
      };
    }

    return {
      ...styles.card,
      padding: config.padding,
      cursor: 'pointer',
      textAlign: 'center' as const,
    };
  };

  const baseStyles = getVariantStyles();
  const hoverStyle = hover && variant === 'card' ? styles.hoverStyles.card : {};

  const cardStyle = {
    ...baseStyles,
    ...(isHovered && hover ? (variant === 'button' ? {
      transform: 'translateY(-2px)',
      boxShadow: currentTheme.shadows.lg,
      opacity: 0.9,
    } : hoverStyle) : {}),
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (variant === 'button') {
    return (
      <div
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        <div style={{ fontSize: config.iconSize }}>{platformInfo.icon}</div>
        <div>
          <div style={{
            fontSize: config.subtitleSize,
            opacity: 0.8,
            lineHeight: '1.2',
          }}>
            {platformInfo.subtitle}
          </div>
          <div style={{
            fontSize: config.titleSize,
            fontWeight: currentTheme.typography.fontWeight.semibold,
            lineHeight: '1.2',
          }}>
            {platformInfo.name}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {/* Badge */}
      {badge && (
        <div style={{ marginBottom: currentTheme.spacing[3] }}>
          <Badge variant={badge.variant} size="sm">
            {badge.text}
          </Badge>
        </div>
      )}

      {/* Platform Icon */}
      <div
        style={{
          fontSize: config.iconSize,
          marginBottom: currentTheme.spacing[4],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          margin: `0 auto ${currentTheme.spacing[4]}`,
          backgroundColor: platformInfo.background,
          borderRadius: currentTheme.borderRadius.xl,
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {platformInfo.icon}
      </div>

      {/* App Name */}
      <h3
        style={{
          fontSize: config.titleSize,
          fontWeight: currentTheme.typography.fontWeight.semibold,
          color: currentTheme.colors.text.primary,
          fontFamily: currentTheme.typography.fontFamily.display,
          marginBottom: currentTheme.spacing[2],
          lineHeight: currentTheme.typography.lineHeight.tight,
        }}
      >
        {appName}
      </h3>

      {/* Platform Name */}
      <p
        style={{
          fontSize: config.subtitleSize,
          color: currentTheme.colors.text.secondary,
          marginBottom: description ? currentTheme.spacing[3] : currentTheme.spacing[4],
          fontWeight: currentTheme.typography.fontWeight.medium,
        }}
      >
        {platformInfo.subtitle} {platformInfo.name}
      </p>

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: config.descriptionSize,
            color: currentTheme.colors.text.secondary,
            lineHeight: currentTheme.typography.lineHeight.relaxed,
            marginBottom: currentTheme.spacing[4],
          }}
        >
          {description}
        </p>
      )}

      {/* Rating */}
      {rating && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: currentTheme.spacing[2],
            marginBottom: currentTheme.spacing[4],
          }}
        >
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                style={{
                  color: i < Math.floor(rating.score) 
                    ? '#fbbf24' 
                    : currentTheme.colors.border.primary,
                  fontSize: currentTheme.typography.fontSize.sm,
                }}
              >
                ★
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: currentTheme.typography.fontSize.sm,
              color: currentTheme.colors.text.tertiary,
            }}
          >
            {rating.score} ({rating.count})
          </span>
        </div>
      )}

      {/* Download Button */}
      <div
        style={{
          backgroundColor: platformInfo.background,
          color: platformInfo.color,
          padding: `${currentTheme.spacing[3]} ${currentTheme.spacing[6]}`,
          borderRadius: currentTheme.borderRadius.lg,
          fontSize: config.subtitleSize,
          fontWeight: currentTheme.typography.fontWeight.semibold,
          transition: 'all 0.2s ease',
          opacity: isHovered ? 0.9 : 1,
        }}
      >
        Download Now
      </div>
    </div>
  );
};