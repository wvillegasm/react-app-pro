import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

interface RouteConfig {
  to: string;
  path: string;
  Component: React.FC;
  icon: string;
};

export const routes: RouteConfig[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    Component: LazyPage1,
    icon: '🏠'
  },
  {
    to: 'lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    icon: 'ℹ️'
  },
  {
    to: 'lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    icon: '📧'
  }
];
