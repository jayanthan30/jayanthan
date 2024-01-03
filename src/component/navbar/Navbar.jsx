
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      
      <ul>

        
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/signup"><a>SignIn</a></Link></li>
        <li><Link to="/signin"><a>SignUp</a></Link></li>
        <li><Link to="/about"><a>About as</a></Link></li>
        <li><Link to="/contact"><a>Contact as</a></Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;