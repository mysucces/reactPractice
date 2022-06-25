import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"

const Navbar =()=>{
    return (
  <div className="navbar">
      <div className='mylogo'>
      </div>
      <ul className='mynavbar'>
          <Link to='/' className='link'><li>Home</li></Link>
          <Link to='/About' className='link'><li>About</li></Link>
          <Link to='/Product' className='link'><li>Product</li></Link>
          <Link to='/Contact' className='link'><li>Contact</li></Link>
      </ul>
  </div>
      );
}

export default Navbar;