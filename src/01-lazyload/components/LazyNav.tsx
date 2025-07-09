import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../../assets/react.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyNav = () => {
  return (
    <BrowserRouter>
      <div className='app-layout'>
        <nav className='sidebar'>
          <div className='sidebar-header'>
            <img src={logo} alt='Logo' className='logo' />
            <h1 className='title'>My Website</h1>
          </div>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                <span className='nav-icon'>🏠</span>
                LazyPage1
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link'>
                <span className='nav-icon'>ℹ️</span>
                LazyPage2
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' className='nav-link'>
                <span className='nav-icon'>📧</span>
                LazyPage3
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className='main-content'>
          <Routes>
            <Route path='/' element={<LazyPage1 />} />
            <Route path='/about' element={<LazyPage2 />} />
            <Route path='/contact' element={<LazyPage3 />} />

            <Route path='*' element={<LazyPage1 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
