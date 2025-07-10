// Theme utility functions and common class combinations

export const getCardClasses = (isDark: boolean) =>
  `border rounded-lg p-6 shadow-lg transition-colors duration-200 ${
    isDark
      ? 'bg-slate-800 border-slate-700'
      : 'bg-white border-gray-200'
  }`;

export const getTextClasses = (isDark: boolean, variant: 'primary' | 'secondary' | 'muted' = 'primary') => {
  const variants = {
    primary: isDark ? 'text-slate-100' : 'text-gray-900',
    secondary: isDark ? 'text-slate-300' : 'text-gray-600',
    muted: isDark ? 'text-slate-400' : 'text-gray-500'
  };
  return variants[variant];
};

export const getButtonClasses = (isDark: boolean, variant: 'primary' | 'secondary' = 'primary') => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer border-none outline-none';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700',
    secondary: isDark
      ? 'bg-slate-700 text-slate-200 hover:bg-slate-600 active:bg-slate-800'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400'
  };

  return `${baseClasses} ${variants[variant]}`;
};

export const getContainerClasses = (isDark: boolean) =>
  `transition-colors duration-200 ${
    isDark ? 'bg-slate-900 text-slate-100' : 'bg-gray-50 text-gray-900'
  }`;

export const getSidebarClasses = (isDark: boolean) =>
  `border-r transition-colors duration-200 ${
    isDark
      ? 'bg-slate-800 border-slate-700'
      : 'bg-white border-gray-200'
  }`;
