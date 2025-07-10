import { Button, Card } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import { getTextClasses } from '../../utils/themeUtils';

export const LazyPage3 = () => {
  const { isDark } = useTheme();

  return (
    <div className='space-y-6'>
      <Card>
        <h2
          className={`text-2xl font-bold mb-6 ${getTextClasses(isDark, 'primary')}`}
        >
          Lazy Page 3 - Advanced Features
        </h2>
        <p className={`mb-6 ${getTextClasses(isDark, 'secondary')}`}>
          Welcome to the third lazy-loaded page. This demonstrates advanced
          theme features with gradients, various button styles, and consistent
          theming.
        </p>

        <div className='space-y-6'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white'>
            <h3 className='text-xl font-bold mb-2'>Gradient Card</h3>
            <p className='mb-4'>
              This card showcases how gradients work beautifully with any theme
              preference. Gradients maintain their visual appeal regardless of
              the surrounding theme.
            </p>
            <Button className='bg-white text-blue-600 hover:bg-gray-100'>
              Explore Gradients
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card className='!shadow-none' title='Theme Benefits'>
              <ul
                className={`space-y-2 text-sm ${getTextClasses(isDark, 'secondary')}`}
              >
                <li>• Automatic light/dark mode switching</li>
                <li>• Consistent color schemes</li>
                <li>• Improved accessibility</li>
                <li>• Better user experience</li>
              </ul>
            </Card>

            <Card className='!shadow-none' title='Component Library'>
              <p
                className={`text-sm mb-4 ${getTextClasses(isDark, 'secondary')}`}
              >
                Our reusable components make building consistent UIs easy.
              </p>
              <div className='space-y-2'>
                <Button className='w-full'>Primary Action</Button>
                <Button variant='secondary' className='w-full'>
                  Secondary Action
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${getTextClasses(isDark, 'primary')}`}
            >
              Action Buttons
            </h3>
            <div className='flex flex-wrap gap-4'>
              <Button className='bg-green-600 hover:bg-green-500'>
                Success Action
              </Button>
              <Button className='bg-red-600 hover:bg-red-500'>
                Danger Action
              </Button>
              <Button variant='secondary'>Neutral Action</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

LazyPage3.displayName = 'Lazy Page 3';
