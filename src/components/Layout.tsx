import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  style?: React.CSSProperties;
}

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24' | '32';
  style?: React.CSSProperties;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: currentTheme.colors.surfaces.background,
      fontFamily: currentTheme.typography.fontFamily.primary,
      color: currentTheme.colors.text.primary,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {children}
    </div>
  );
};

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  maxWidth = 'lg',
  style 
}) => {
  const { currentTheme } = useTheme();
  
  const maxWidthStyles = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%'
  };

  return (
    <div style={{
      maxWidth: maxWidthStyles[maxWidth],
      margin: '0 auto',
      padding: `0 ${currentTheme.spacing[6]}`,
      width: '100%',
      boxSizing: 'border-box',
      ...style,
    }}>
      {children}
    </div>
  );
};

export const Grid: React.FC<GridProps> = ({ 
  children, 
  columns = 1, 
  gap = '4',
  style 
}) => {
  const { currentTheme } = useTheme();
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: currentTheme.spacing[gap],
      width: '100%',
      justifyItems: 'stretch',
      ...style,
    }}>
      {children}
    </div>
  );
};

export const Section: React.FC<{ 
  children: React.ReactNode; 
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
  id?: string;
}> = ({ 
  children, 
  spacing = 'lg',
  style,
  id
}) => {
  const { currentTheme } = useTheme();
  
  const spacingValues = {
    sm: currentTheme.spacing[8],
    md: currentTheme.spacing[12],
    lg: currentTheme.spacing[16],
    xl: currentTheme.spacing[20],
  };
  
  return (
    <section 
      id={id}
      style={{
        padding: `${spacingValues[spacing]} 0`,
        ...style,
      }}
    >
      {children}
    </section>
  );
};