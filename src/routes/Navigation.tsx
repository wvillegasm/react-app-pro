import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../assets/react.svg';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';

export const Navigation = () => {
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
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link'>
                <span className='nav-icon'>ℹ️</span>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' className='nav-link'>
                <span className='nav-icon'>📧</span>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
