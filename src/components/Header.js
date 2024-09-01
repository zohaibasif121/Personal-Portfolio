import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LOGO from './Images/logo.svg';
import Menu from './Images/menu-outline.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navcomponents = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/About' },
    { name: 'Skills', link: '/Skills' },
    { name: 'Resume', link: '/Resume' },
    { name: 'Projects', link: '/Projects' },
    { name: 'Contact', link: '/ContactUs' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function closemenu (){
    setIsMenuOpen(false)
  }

  return (
    <header className="p-5 ">
      <nav 
      className='flex justify-between items-start  px-10 md:justify-around  p-2 backdrop-blur-2xl bg-white/10 border-b border-white/10 shadow-lg '>
        <div className={` font-bold flex items-start  space-x-2 ${isMenuOpen ? 'absolute left-4 ' : ''}`}>
          <img src={LOGO} alt="Logo" className="h-8 w-8" />
          <p>Zohaib</p>
        </div>

        <div className="absolute right-2 md:hidden">
          <button onClick={toggleMenu}>
            <img src={Menu} alt="menu" className="h-8 w-8" />
          </button>
        </div>

        <div className={`flex-col  justify-start mt-10 md:mt-0 md:flex md:flex-row md:items-center md:space-x-6 text-sm ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            {Navcomponents.map((obj) => (
              <li key={obj.name} className="my-2 md:my-0 border-b-2 md:border-b-0" onClick={closemenu}>
                <NavLink
                  to={obj.link}
                  className={({ isActive }) =>
                    isActive ? 'text-black font-bold text-md' : 'text-white hover:text-black'
                  }
                >
                  {obj.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
