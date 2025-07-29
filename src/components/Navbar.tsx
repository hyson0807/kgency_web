import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Badge } from './Badge';

export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  };
  active?: boolean;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  logoText?: string;
  items?: NavItem[];
  actions?: React.ReactNode;
  sticky?: boolean;
  transparent?: boolean;
  style?: React.CSSProperties;
}

// 반응형 훅
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  // logoText = "Kgency",
  items = [],
  actions,
  sticky = true,
  transparent = false,
  style
}) => {
  const { currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();
  
  // 화면이 768px 이하일 때 모바일 모드
  const isMobile = windowWidth < 768;

  const navbarStyle = {
    position: sticky ? 'sticky' as const : 'static' as const,
    top: sticky ? 0 : 'auto',
    left: 0,
    right: 0,
    zIndex: currentTheme.zIndex[50],
    backgroundColor: transparent 
      ? currentTheme.colors.surfaces.translucent 
      : currentTheme.colors.surfaces.background,
    borderBottom: `1px solid ${currentTheme.colors.border.primary}`,
    backdropFilter: transparent ? 'blur(10px)' : 'none',
    transition: 'all 0.2s ease',
    ...style,
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: `0 ${currentTheme.spacing[6]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.spacing[3],
    fontSize: currentTheme.typography.fontSize.xl,
    fontWeight: currentTheme.typography.fontWeight.bold,
    color: currentTheme.colors.text.primary,
    fontFamily: currentTheme.typography.fontFamily.display,
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const navItemsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.spacing[1],
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const actionsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.spacing[3],
  };

  const mobileMenuButtonStyle = {
    display: 'block',
    padding: currentTheme.spacing[2],
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    borderRadius: currentTheme.borderRadius.md,
    color: currentTheme.colors.text.primary,
    fontSize: '20px',
  };

  return (
    <>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <div style={logoStyle}>
            {logo}
            {/*<span>{logoText}</span>*/}
          </div>

          {/* Desktop Navigation - 모바일에서 숨김 */}
          {!isMobile && (
            <ul style={navItemsStyle}>
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: currentTheme.spacing[2],
                      padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
                      borderRadius: currentTheme.borderRadius.md,
                      textDecoration: 'none',
                      fontSize: currentTheme.typography.fontSize.sm,
                      fontWeight: currentTheme.typography.fontWeight.medium,
                      color: item.active 
                        ? currentTheme.colors.text.accent 
                        : currentTheme.colors.text.secondary,
                      backgroundColor: item.active 
                        ? currentTheme.colors.surfaces.panel 
                        : 'transparent',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
                        e.currentTarget.style.color = currentTheme.colors.text.primary;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = currentTheme.colors.text.secondary;
                      }
                    }}
                  >
                    {item.label}
                    {item.badge && (
                      <Badge variant={item.badge.variant} size="sm">
                        {item.badge.text}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Actions */}
          <div style={actionsStyle}>
            {!isMobile && actions}
            
            {/* Mobile Menu Button - 모바일에서만 표시 */}
            {isMobile && (
              <button
                style={mobileMenuButtonStyle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu - 모바일에서만 표시 */}
        {isMobile && mobileMenuOpen && (
          <div
            style={{
              backgroundColor: currentTheme.colors.surfaces.background,
              borderTop: `1px solid ${currentTheme.colors.border.primary}`,
              padding: currentTheme.spacing[4],
            }}
          >
            <ul style={{ ...navItemsStyle, flexDirection: 'column', alignItems: 'stretch' }}>
              {items.map((item, index) => (
                <li key={index} style={{ width: '100%' }}>
                  <a
                    href={item.href}
                    onClick={() => {
                      item.onClick?.();
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: currentTheme.spacing[3],
                      borderRadius: currentTheme.borderRadius.md,
                      textDecoration: 'none',
                      fontSize: currentTheme.typography.fontSize.base,
                      fontWeight: currentTheme.typography.fontWeight.medium,
                      color: item.active
                        ? currentTheme.colors.text.accent
                        : currentTheme.colors.text.primary,
                      backgroundColor: item.active
                        ? currentTheme.colors.surfaces.panel
                        : 'transparent',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      marginBottom: currentTheme.spacing[1],
                    }}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge variant={item.badge.variant} size="sm">
                        {item.badge.text}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};