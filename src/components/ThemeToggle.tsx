import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Button } from './Button';

export const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button 
      variant="secondary" 
      size="sm" 
      onClick={toggleTheme}
      style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px',
        zIndex: 50 
      }}
    >
      {mode === 'light' ? '🌙' : '☀️'} {mode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};