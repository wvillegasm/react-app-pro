import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getCardClasses, getTextClasses } from '../utils/themeUtils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
}) => {
  const { isDark } = useTheme();

  return (
    <div className={`${getCardClasses(isDark)} ${className}`}>
      {title && (
        <h3
          className={`text-lg font-semibold mb-4 ${getTextClasses(isDark, 'primary')}`}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
