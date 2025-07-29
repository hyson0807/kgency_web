import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  variant?: 'default' | 'minimal' | 'featured';
  size?: 'sm' | 'md' | 'lg';
}

export const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  rating,
  variant = 'default',
  size = 'md',
  style,
  ...props
}) => {
  const { currentTheme } = useTheme();

  const sizeConfig = {
    sm: {
      padding: currentTheme.spacing[4],
      contentSize: currentTheme.typography.fontSize.sm,
      nameSize: currentTheme.typography.fontSize.base,
      roleSize: currentTheme.typography.fontSize.xs,
      avatarSize: '40px',
      quoteSize: '24px',
    },
    md: {
      padding: currentTheme.spacing[6],
      contentSize: currentTheme.typography.fontSize.base,
      nameSize: currentTheme.typography.fontSize.lg,
      roleSize: currentTheme.typography.fontSize.sm,
      avatarSize: '48px',
      quoteSize: '32px',
    },
    lg: {
      padding: currentTheme.spacing[8],
      contentSize: currentTheme.typography.fontSize.lg,
      nameSize: currentTheme.typography.fontSize.xl,
      roleSize: currentTheme.typography.fontSize.base,
      avatarSize: '56px',
      quoteSize: '40px',
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
      case 'featured':
        return {
          backgroundColor: currentTheme.colors.primary[50],
          border: `2px solid ${currentTheme.colors.primary[200]}`,
          borderRadius: currentTheme.borderRadius.xl,
          padding: config.padding,
          boxShadow: currentTheme.shadows.sm,
        };
      default:
        return {
          backgroundColor: currentTheme.colors.surfaces.elevated,
          border: `1px solid ${currentTheme.colors.border.primary}`,
          borderRadius: currentTheme.borderRadius.lg,
          padding: config.padding,
          boxShadow: currentTheme.shadows.xs,
        };
    }
  };

  const testimonialStyle = {
    ...getVariantStyles(),
    position: 'relative' as const,
    ...style,
  };

  const quoteStyle = {
    fontSize: config.quoteSize,
    color: currentTheme.colors.primary[300],
    position: 'absolute' as const,
    top: config.padding,
    left: config.padding,
    lineHeight: 1,
  };

  const contentStyle = {
    fontSize: config.contentSize,
    color: currentTheme.colors.text.primary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
    marginBottom: currentTheme.spacing[4],
    paddingTop: currentTheme.spacing[4],
    fontStyle: 'italic',
  };

  const authorStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.spacing[3],
  };

  const avatarStyle = {
    width: config.avatarSize,
    height: config.avatarSize,
    borderRadius: '50%',
    backgroundColor: currentTheme.colors.primary[100],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: currentTheme.typography.fontSize.lg,
    color: currentTheme.colors.primary[600],
    fontWeight: currentTheme.typography.fontWeight.semibold,
    overflow: 'hidden',
  };

  const nameStyle = {
    fontSize: config.nameSize,
    fontWeight: currentTheme.typography.fontWeight.semibold,
    color: currentTheme.colors.text.primary,
    lineHeight: currentTheme.typography.lineHeight.tight,
  };

  const roleStyle = {
    fontSize: config.roleSize,
    color: currentTheme.colors.text.secondary,
    lineHeight: currentTheme.typography.lineHeight.tight,
  };

  const ratingStyle = {
    display: 'flex',
    gap: '2px',
    marginBottom: currentTheme.spacing[3],
  };

  return (
    <div style={testimonialStyle} {...props}>
      {variant !== 'minimal' && <div style={quoteStyle}>"</div>}
      
      {rating && (
        <div style={ratingStyle}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{
                color: i < rating ? '#fbbf24' : currentTheme.colors.border.primary,
                fontSize: currentTheme.typography.fontSize.base,
              }}
            >
              ★
            </span>
          ))}
        </div>
      )}

      <p style={contentStyle}>"{content}"</p>

      <div style={authorStyle}>
        <div style={avatarStyle}>
          {author.avatar ? (
            <img 
              src={author.avatar} 
              alt={author.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            author.name.charAt(0).toUpperCase()
          )}
        </div>
        <div>
          <div style={nameStyle}>{author.name}</div>
          <div style={roleStyle}>
            {author.role}
            {author.company && `, ${author.company}`}
          </div>
        </div>
      </div>
    </div>
  );
};