import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TfiList, TfiClose } from "react-icons/tfi";
import "./active.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-indigo-600 mx-auto text-white navbar shadow-sm rounded-b-lg">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12 items-center px-4">
          <div className="text-center justify-center lg:col-span-8">
            <a className="btn btn-ghost text-xl ">WorldAltas</a>
          </div>
          <div className="text-center hidden lg:block justify-self-end lg:col-span-4">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/About'>About</NavLink></li>
              <li><NavLink to='/Contact'>Contact</NavLink></li>
              <li><NavLink to='/Country'>Country</NavLink></li>
            </ul>
          </div>
        </div>
        {/* Hamburger menu icon - visible only on small screens */}
        {menuOpen !== undefined && (
          <div className="text-right lg:hidden px-4 py-2">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white text-2xl">
              {menuOpen ? <TfiClose /> : <TfiList />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile menu - visible when menuOpen is true and outside nav */}
      {menuOpen && (
        <div className="lg:hidden text-white bg-indigo-700 px-4 py-2">
          <ul className="menu flex flex-col gap-2">
            <li><NavLink onClick={() => setMenuOpen(false)} to='/'>Home</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to='/About'>About</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to='/Contact'>Contact</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to='/Country'>Country</NavLink></li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header
