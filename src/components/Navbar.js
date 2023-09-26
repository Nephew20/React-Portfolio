import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/"> About </Link>
          </li>

          <li className="nav-item">
            <Link to="/portfolio"> Portfolio </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>

      </div>
    </header>

  );
}

export default NavBar;
