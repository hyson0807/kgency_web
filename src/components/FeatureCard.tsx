import React from 'react';
import { useStyles } from '../theme/useStyles';
import { useTheme } from '../theme/ThemeProvider';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  };
  highlight?: boolean;
  variant?: 'default' | 'minimal' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  stats,
  highlight = false,
  variant = 'default',
  size = 'md',
  hover = true,
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const styles = useStyles();
  const { currentTheme } = useTheme();

  const sizeConfig = {
    sm: {
      padding: currentTheme.spacing[4],
      iconSize: '32px',
      titleSize: currentTheme.typography.fontSize.lg,
      descriptionSize: currentTheme.typography.fontSize.sm,
      statsValueSize: currentTheme.typography.fontSize.xl,
      statsLabelSize: currentTheme.typography.fontSize.xs,
    },
    md: {
      padding: currentTheme.spacing[6],
      iconSize: '48px',
      titleSize: currentTheme.typography.fontSize.xl,
      descriptionSize: currentTheme.typography.fontSize.base,
      statsValueSize: currentTheme.typography.fontSize['2xl'],
      statsLabelSize: currentTheme.typography.fontSize.sm,
    },
    lg: {
      padding: currentTheme.spacing[8],
      iconSize: '64px',
      titleSize: currentTheme.typography.fontSize['2xl'],
      descriptionSize: currentTheme.typography.fontSize.lg,
      statsValueSize: currentTheme.typography.fontSize['3xl'],
      statsLabelSize: currentTheme.typography.fontSize.base,
    },
  };

  const config = sizeConfig[size];

  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          padding: config.padding,
        };
      case 'bordered':
        return {
          backgroundColor: currentTheme.colors.surfaces.background,
          border: `2px solid ${highlight ? currentTheme.colors.primary[500] : currentTheme.colors.border.primary}`,
          borderRadius: currentTheme.borderRadius.xl,
          padding: config.padding,
          boxShadow: 'none',
        };
      default:
        return {
          ...styles.card,
          backgroundColor: highlight 
            ? currentTheme.colors.primary[50] 
            : currentTheme.colors.surfaces.elevated,
          border: highlight 
            ? `1px solid ${currentTheme.colors.primary[200]}` 
            : `1px solid ${currentTheme.colors.border.primary}`,
          padding: config.padding,
        };
    }
  };

  const baseStyles = getVariantStyles();
  const hoverStyle = hover ? styles.hoverStyles.card : {};

  const cardStyle = {
    ...baseStyles,
    ...(isHovered && hover ? hoverStyle : {}),
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    textAlign: 'center' as const,
    position: 'relative' as const,
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

  const iconColor = highlight ? currentTheme.colors.primary[600] : currentTheme.colors.primary[500];
  const titleColor = highlight ? currentTheme.colors.primary[800] : currentTheme.colors.text.primary;

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Highlight indicator */}
      {highlight && variant === 'default' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: currentTheme.colors.primary[500],
            borderRadius: `0 0 ${currentTheme.borderRadius.sm} ${currentTheme.borderRadius.sm}`,
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          fontSize: config.iconSize,
          color: iconColor,
          marginBottom: currentTheme.spacing[4],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {icon}
      </div>

      {/* Stats */}
      {stats && (
        <div style={{ marginBottom: currentTheme.spacing[4] }}>
          <div
            style={{
              fontSize: config.statsValueSize,
              fontWeight: currentTheme.typography.fontWeight.bold,
              color: currentTheme.colors.primary[600],
              fontFamily: currentTheme.typography.fontFamily.display,
              lineHeight: currentTheme.typography.lineHeight.tight,
            }}
          >
            {stats.value}
          </div>
          <div
            style={{
              fontSize: config.statsLabelSize,
              color: currentTheme.colors.text.tertiary,
              fontWeight: currentTheme.typography.fontWeight.medium,
              textTransform: 'uppercase',
              letterSpacing: currentTheme.typography.letterSpacing.wide,
            }}
          >
            {stats.label}
          </div>
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          fontSize: config.titleSize,
          fontWeight: currentTheme.typography.fontWeight.semibold,
          color: titleColor,
          fontFamily: currentTheme.typography.fontFamily.display,
          marginBottom: currentTheme.spacing[3],
          lineHeight: currentTheme.typography.lineHeight.tight,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: config.descriptionSize,
          color: currentTheme.colors.text.secondary,
          lineHeight: currentTheme.typography.lineHeight.relaxed,
          fontFamily: currentTheme.typography.fontFamily.primary,
          flex: 1,
        }}
      >
        {description}
      </p>
    </div>
  );
};