import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className='Logo'>
            <NavLink to='/'>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/About'>About</NavLink></li>
              <li><NavLink to='/Contact'>Contact</NavLink></li>
              <li><NavLink to='/Country'>Country</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
