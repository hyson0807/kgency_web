import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Button } from './Button';

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterProps {
  logo?: React.ReactNode;
  logoText?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  bottomText?: string;
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    onSubmit: (email: string) => void;
  };
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  logoText = "Linear",
  description = "The issue tracking tool your team will actually love to use.",
  sections = [],
  socialLinks = [],
  bottomText,
  newsletter,
  style
}) => {
  const { currentTheme } = useTheme();
  const [email, setEmail] = React.useState('');

  const footerStyle = {
    backgroundColor: currentTheme.colors.surfaces.foreground,
    borderTop: `1px solid ${currentTheme.colors.border.primary}`,
    ...style,
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: `${currentTheme.spacing[16]} ${currentTheme.spacing[6]} ${currentTheme.spacing[8]}`,
  };

  const topSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: currentTheme.spacing[8],
    marginBottom: currentTheme.spacing[12],
  };

  const logoSectionStyle = {
    gridColumn: '1 / -1',
    maxWidth: '400px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.spacing[3],
    fontSize: currentTheme.typography.fontSize.xl,
    fontWeight: currentTheme.typography.fontWeight.bold,
    color: currentTheme.colors.text.primary,
    fontFamily: currentTheme.typography.fontFamily.display,
    marginBottom: currentTheme.spacing[4],
  };

  const descriptionStyle = {
    fontSize: currentTheme.typography.fontSize.base,
    color: currentTheme.colors.text.secondary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
    marginBottom: currentTheme.spacing[6],
  };

  const sectionTitleStyle = {
    fontSize: currentTheme.typography.fontSize.sm,
    fontWeight: currentTheme.typography.fontWeight.semibold,
    color: currentTheme.colors.text.primary,
    marginBottom: currentTheme.spacing[4],
    letterSpacing: currentTheme.typography.letterSpacing.wide,
    textTransform: 'uppercase' as const,
  };

  const linkStyle = {
    display: 'block',
    padding: `${currentTheme.spacing[1]} 0`,
    fontSize: currentTheme.typography.fontSize.sm,
    color: currentTheme.colors.text.secondary,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: currentTheme.spacing[4],
    marginTop: currentTheme.spacing[4],
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: currentTheme.borderRadius.md,
    backgroundColor: currentTheme.colors.surfaces.panel,
    color: currentTheme.colors.text.secondary,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  };

  const bottomSectionStyle = {
    paddingTop: currentTheme.spacing[6],
    borderTop: `1px solid ${currentTheme.colors.border.primary}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: currentTheme.spacing[4],
  };

  const bottomTextStyle = {
    fontSize: currentTheme.typography.fontSize.sm,
    color: currentTheme.colors.text.tertiary,
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletter && email) {
      newsletter.onSubmit(email);
      setEmail('');
    }
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topSectionStyle}>
          {/* Logo and Description */}
          <div style={logoSectionStyle}>
            <div style={logoStyle}>
              {logo}
              <span>{logoText}</span>
            </div>
            <p style={descriptionStyle}>
              {description}
            </p>
            
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div style={socialLinksStyle}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = currentTheme.colors.primary[500];
                      e.currentTarget.style.color = currentTheme.colors.text.inverse;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
                      e.currentTarget.style.color = currentTheme.colors.text.secondary;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 style={sectionTitleStyle}>
                {section.title}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      style={linkStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = currentTheme.colors.text.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = currentTheme.colors.text.secondary;
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          {newsletter && (
            <div>
              <h3 style={sectionTitleStyle}>
                {newsletter.title}
              </h3>
              <p style={{
                fontSize: currentTheme.typography.fontSize.sm,
                color: currentTheme.colors.text.secondary,
                marginBottom: currentTheme.spacing[4],
                lineHeight: currentTheme.typography.lineHeight.relaxed,
              }}>
                {newsletter.description}
              </p>
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: currentTheme.spacing[2] }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  required
                  style={{
                    flex: 1,
                    padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[3]}`,
                    backgroundColor: currentTheme.colors.surfaces.background,
                    border: `1px solid ${currentTheme.colors.border.primary}`,
                    borderRadius: currentTheme.borderRadius.md,
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: currentTheme.colors.text.primary,
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = currentTheme.colors.border.focus;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = currentTheme.colors.border.primary;
                  }}
                />
                <Button type="submit" variant="primary" size="sm">
                  {newsletter.buttonText}
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div style={bottomSectionStyle}>
          <div style={bottomTextStyle}>
            {bottomText || `© ${new Date().getFullYear()} ${logoText}. All rights reserved.`}
          </div>
          
          <div style={{ display: 'flex', gap: currentTheme.spacing[6] }}>
            <a
              href="#"
              style={{
                ...bottomTextStyle,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.colors.text.secondary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.colors.text.tertiary;
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                ...bottomTextStyle,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.colors.text.secondary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.colors.text.tertiary;
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};