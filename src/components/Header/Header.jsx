import { useState, useEffect } from 'react';
import sign_m from '../../img/sign_m.png';
import { Link, NavLink } from 'react-router-dom';
import { IoMoon, IoMoonOutline, IoChevronUpCircleSharp } from 'react-icons/io5';
import styles from './Header.module.css';


export const Header = () => {
  const [theme, setTheme] = useState('light');
  const [menuGrow, setmenuGrow] = useState(true);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const toggleMenuGrow = () => setmenuGrow(!menuGrow);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>

        <img className={styles.logo} src={sign_m} />
      
        {menuGrow && (
          <div className={styles.menu_section}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/api/models?sort=all&page=1'}>3d models</NavLink>
            <NavLink to={'/howusepage'}>
              how to use
            </NavLink>
          </div>
        )}

        <div onClick={toggleTheme}>
          {theme === 'light' ? (
            <IoMoonOutline size='20px' />
          ) : (
            <IoMoon size='20px' />
          )}{' '}
        </div>

        <div className='menu_toggle' onClick={toggleMenuGrow}>
          {theme === 'light' ? (
            <IoChevronUpCircleSharp size='60px' />
          ) : (
            <IoChevronUpCircleSharp size='60px' />
          )}{' '}
        </div>

      </div>

    </header>
  );
};