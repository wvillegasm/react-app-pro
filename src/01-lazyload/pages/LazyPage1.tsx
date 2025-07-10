import { Card } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import { getTextClasses } from '../../utils/themeUtils';
import { Counter } from '../components/Counter';
import { CounterBy } from '../components/CounterBy';

export const LazyPage1 = () => {
  const { isDark } = useTheme();

  return (
    <div className='space-y-6'>
      <Card>
        <h2
          className={`text-2xl font-bold mb-6 ${getTextClasses(isDark, 'primary')}`}
        >
          Lazy Page 1
        </h2>
        <p className={`mb-6 ${getTextClasses(isDark, 'secondary')}`}>
          Welcome to the first lazy-loaded page! This page contains interactive
          counters with a beautiful theme that automatically adapts to your
          preference. Try switching between dark and light modes using the
          toggle in the sidebar!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
          <div className='space-y-4'>
            <h3
              className={`text-lg font-semibold ${getTextClasses(isDark, 'primary')}`}
            >
              Basic Counter
            </h3>
            <Counter initialValue={10} />
          </div>

          <div className='space-y-4'>
            <h3
              className={`text-lg font-semibold ${getTextClasses(isDark, 'primary')}`}
            >
              Advanced Counter
            </h3>
            <CounterBy initialValue={5} />
          </div>
        </div>
      </Card>
    </div>
  );
};

LazyPage1.displayName = 'Lazy Page 1';
