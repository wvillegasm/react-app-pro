import { LazyNav } from './01-lazyload/components/LazyNav';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LazyNav />
    </ThemeProvider>
  );
}

export default App;
