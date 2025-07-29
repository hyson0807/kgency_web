import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { useStyles } from '../theme/useStyles';

export interface TeamMemberProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  variant?: 'default' | 'compact' | 'detailed';
  hover?: boolean;
}

export const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  avatar,
  social,
  variant = 'default',
  hover = true,
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { currentTheme } = useTheme();
  const styles = useStyles();

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          padding: currentTheme.spacing[4],
          textAlign: 'center' as const,
        };
      case 'detailed':
        return {
          padding: currentTheme.spacing[6],
          display: 'flex',
          gap: currentTheme.spacing[6],
          alignItems: 'flex-start',
        };
      default:
        return {
          padding: currentTheme.spacing[6],
          textAlign: 'center' as const,
        };
    }
  };

  const cardStyle = {
    ...styles.card,
    ...getVariantStyles(),
    ...(isHovered && hover ? styles.hoverStyles.card : {}),
    ...style,
  };

  const avatarStyle = {
    width: variant === 'compact' ? '80px' : variant === 'detailed' ? '120px' : '100px',
    height: variant === 'compact' ? '80px' : variant === 'detailed' ? '120px' : '100px',
    borderRadius: '50%',
    backgroundColor: currentTheme.colors.primary[100],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: currentTheme.typography.fontSize['2xl'],
    color: currentTheme.colors.primary[600],
    fontWeight: currentTheme.typography.fontWeight.bold,
    overflow: 'hidden',
    margin: variant === 'detailed' ? 0 : `0 auto ${currentTheme.spacing[4]}`,
    flexShrink: 0,
  };

  const nameStyle = {
    fontSize: variant === 'compact' 
      ? currentTheme.typography.fontSize.lg 
      : currentTheme.typography.fontSize.xl,
    fontWeight: currentTheme.typography.fontWeight.semibold,
    color: currentTheme.colors.text.primary,
    fontFamily: currentTheme.typography.fontFamily.display,
    marginBottom: currentTheme.spacing[1],
    lineHeight: currentTheme.typography.lineHeight.tight,
  };

  const roleStyle = {
    fontSize: variant === 'compact'
      ? currentTheme.typography.fontSize.sm
      : currentTheme.typography.fontSize.base,
    color: currentTheme.colors.primary[600],
    fontWeight: currentTheme.typography.fontWeight.medium,
    marginBottom: bio ? currentTheme.spacing[3] : currentTheme.spacing[4],
  };

  const bioStyle = {
    fontSize: currentTheme.typography.fontSize.sm,
    color: currentTheme.colors.text.secondary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
    marginBottom: currentTheme.spacing[4],
  };

  const socialStyle = {
    display: 'flex',
    gap: currentTheme.spacing[3],
    justifyContent: variant === 'detailed' ? 'flex-start' : 'center',
  };

  const socialLinkStyle = {
    width: '32px',
    height: '32px',
    borderRadius: currentTheme.borderRadius.md,
    backgroundColor: currentTheme.colors.surfaces.panel,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: currentTheme.colors.text.secondary,
    textDecoration: 'none',
    fontSize: currentTheme.typography.fontSize.sm,
    transition: 'all 0.2s ease',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) setIsHovered(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  const socialIcons = {
    linkedin: 'in',
    twitter: 'X',
    github: 'gh',
    email: '@',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {variant === 'detailed' ? (
        <>
          <div style={avatarStyle}>
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
            )}
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={nameStyle}>{name}</h3>
            <p style={roleStyle}>{role}</p>
            {bio && <p style={bioStyle}>{bio}</p>}
            {social && Object.keys(social).length > 0 && (
              <div style={socialStyle}>
                {Object.entries(social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = currentTheme.colors.primary[500];
                      e.currentTarget.style.color = currentTheme.colors.text.inverse;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
                      e.currentTarget.style.color = currentTheme.colors.text.secondary;
                    }}
                  >
                    {socialIcons[platform as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div style={avatarStyle}>
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
            )}
          </div>
          <h3 style={nameStyle}>{name}</h3>
          <p style={roleStyle}>{role}</p>
          {bio && variant !== 'compact' && <p style={bioStyle}>{bio}</p>}
          {social && Object.keys(social).length > 0 && (
            <div style={socialStyle}>
              {Object.entries(social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.colors.primary[500];
                    e.currentTarget.style.color = currentTheme.colors.text.inverse;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
                    e.currentTarget.style.color = currentTheme.colors.text.secondary;
                  }}
                >
                  {socialIcons[platform as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};