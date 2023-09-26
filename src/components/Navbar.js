import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar() {
  return (
    <header>
      
      <div className="my-name">
        
        Kevin J. Cofield
        
      </div>
      
      <div className='nav'>

        <ul>
          <li className="nav-item">
            <NavLink to="/" className='nav-links'> About </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/portfolio" className='nav-links'> Portfolio </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className='nav-links'> Contact </NavLink>
          </li>
        </ul>

      </div>
    </header>

  );
}

export default NavBar;
