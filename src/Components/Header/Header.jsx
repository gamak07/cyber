import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e) =>{
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Cybersecurity Education Platform</h1>
      <button 
        className="sm:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 
            <span className='h-[2rem] w-[2rem]'>
                <img className='h-full w-full' src={close} alt="" />
            </span> : 
            <span className='h-[2rem] w-[2rem]'>
                <img className='h-full w-full' src={menu} alt="" />
            </span> 
        }
      </button>
      <nav className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 ${isMenuOpen ? '' : 'hidden sm:flex'}`}>
        <NavLink 
          to="/" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-300'}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/best-practices" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-300'}`
          }
        >
          Best Practices
        </NavLink>
        <NavLink 
          to="/simulation" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-300'}`
          }
        >
          Simulation
        </NavLink>
        <NavLink 
          to="/quiz" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-300'}`
          }
        >
          Quiz
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;