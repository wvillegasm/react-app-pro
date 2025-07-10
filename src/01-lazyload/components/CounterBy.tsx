import { useState } from 'react';
import { Button, Card } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import { getTextClasses } from '../../utils/themeUtils';

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  count: number;
  clicks: number;
}

export const CounterBy: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState<CounterState>({
    count: initialValue,
    clicks: 0,
  });
  const { isDark } = useTheme();

  const handleIncrementBy = (amount: number) => {
    setCounter(({ count, clicks }) => ({
      count: count + amount,
      clicks: clicks + 1,
    }));
  };

  const handleReset = () => {
    setCounter({
      count: initialValue,
      clicks: 0,
    });
  };

  return (
    <Card title='Advanced Counter'>
      <div className='flex gap-6 mb-6'>
        <div className={getTextClasses(isDark, 'secondary')}>
          <span className={`block text-sm ${getTextClasses(isDark, 'muted')}`}>
            Count
          </span>
          <span
            className={`text-2xl font-bold ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {counter.count}
          </span>
        </div>
        <div className={getTextClasses(isDark, 'secondary')}>
          <span className={`block text-sm ${getTextClasses(isDark, 'muted')}`}>
            Total Clicks
          </span>
          <span
            className={`text-2xl font-bold ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`}
          >
            {counter.clicks}
          </span>
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        <Button onClick={() => handleIncrementBy(1)}>+1</Button>
        <Button onClick={() => handleIncrementBy(5)}>+5</Button>
        <Button onClick={() => handleIncrementBy(10)}>+10</Button>
        <Button onClick={handleReset} variant='secondary'>
          Reset
        </Button>
      </div>
    </Card>
  );
};
