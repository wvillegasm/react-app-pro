import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='flex items-center gap-3'>
      <span
        className={`text-sm font-medium ${
          isDark ? 'text-slate-300' : 'text-gray-600'
        }`}
      >
        Theme
      </span>
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${
            isDark
              ? 'bg-blue-600 focus:ring-offset-slate-800'
              : 'bg-gray-300 focus:ring-offset-white'
          }
        `}
        aria-label='Toggle theme'
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out
            ${isDark ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
        <span className='sr-only'>
          {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        </span>
      </button>
      <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
        {isDark ? '🌙' : '☀️'}
      </div>
    </div>
  );
};
