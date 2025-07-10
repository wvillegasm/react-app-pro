import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getButtonClasses } from '../utils/themeUtils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const { isDark } = useTheme();

  return (
    <button
      className={`${getButtonClasses(isDark, variant)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
