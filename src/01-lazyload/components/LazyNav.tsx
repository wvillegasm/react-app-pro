import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import type React from 'react';
import logo from '../../assets/react.svg';
import { ThemeToggle } from '../../components/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import { routes } from '../../routes/routes';
import { LazyPage1 } from '../pages';

export const LazyNav: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <BrowserRouter>
      <div
        className={`flex h-screen transition-colors duration-200 ${
          isDark ? 'bg-slate-900 text-slate-100' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <nav
          className={`w-64 p-6 flex flex-col border-r transition-colors duration-200 ${
            isDark
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <div
            className={`flex items-center gap-3 mb-8 pb-6 border-b transition-colors duration-200 ${
              isDark ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <img src={logo} alt='Logo' className='w-10 h-10 rounded-lg' />
            <h1
              className={`text-xl font-bold ${
                isDark ? 'text-slate-100' : 'text-gray-900'
              }`}
            >
              My Website
            </h1>
          </div>

          <ul className='flex flex-col gap-2 flex-1'>
            {routes.map(route => (
              <li className='list-none' key={route.path}>
                <NavLink
                  to={`/${route.to}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 no-underline ${
                      isActive
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : isDark
                          ? 'text-slate-300 hover:text-slate-100 hover:bg-slate-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`
                  }
                >
                  <span className='text-lg'>{route.icon}</span>
                  {route.Component.displayName}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className={`mt-6 pt-6 border-t ${
              isDark ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <ThemeToggle />
          </div>
        </nav>

        <main
          className={`flex-1 p-8 overflow-y-auto transition-colors duration-200 ${
            isDark ? 'bg-slate-900' : 'bg-gray-50'
          }`}
        >
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={`/${route.to}`}
                element={<route.Component />}
              />
            ))}

            <Route path='*' element={<LazyPage1 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
