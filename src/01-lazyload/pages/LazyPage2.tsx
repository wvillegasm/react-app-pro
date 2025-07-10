import { Button, Card } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import { getTextClasses } from '../../utils/themeUtils';

export const LazyPage2 = () => {
  const { isDark } = useTheme();

  return (
    <div className='space-y-6'>
      <Card>
        <h2
          className={`text-2xl font-bold mb-6 ${getTextClasses(isDark, 'primary')}`}
        >
          Lazy Page 2 - Enhanced
        </h2>
        <p className={`mb-6 ${getTextClasses(isDark, 'secondary')}`}>
          This is the second lazy-loaded page, now enhanced with our reusable
          components. It showcases how the theme system works across different
          pages.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card className='!shadow-none' title='Feature 1'>
            <p
              className={`text-sm mb-4 ${getTextClasses(isDark, 'secondary')}`}
            >
              This card uses our reusable Card component with beautiful styling
              that adapts to your theme preference seamlessly.
            </p>
            <Button>Learn More</Button>
          </Card>

          <Card className='!shadow-none' title='Feature 2'>
            <p
              className={`text-sm mb-4 ${getTextClasses(isDark, 'secondary')}`}
            >
              Another feature with consistent theme appearance that switches
              between light and dark modes automatically.
            </p>
            <Button variant='secondary'>Get Started</Button>
          </Card>
        </div>

        <div className='mt-8'>
          <h3
            className={`text-lg font-semibold mb-4 ${getTextClasses(isDark, 'primary')}`}
          >
            Button Variations
          </h3>
          <div className='flex flex-wrap gap-4'>
            <Button>Primary Button</Button>
            <Button variant='secondary'>Secondary Button</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

LazyPage2.displayName = 'Lazy Page 2';
