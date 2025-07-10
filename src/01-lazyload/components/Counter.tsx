import { useState } from 'react';
import { Button, Card } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import { getTextClasses } from '../../utils/themeUtils';

interface CounterProps {
  initialValue?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const { isDark } = useTheme();

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <Card title='Simple Counter'>
      <div className='flex items-center gap-4 mb-4'>
        <span className={getTextClasses(isDark, 'secondary')}>Count:</span>
        <span
          className={`text-2xl font-bold ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          {count}
        </span>
      </div>

      <div className='flex gap-3'>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleReset} variant='secondary'>
          Reset
        </Button>
      </div>
    </Card>
  );
};
