import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='brand'>Fridge Finder</div>
        <ul className='navbar-list'>
          <li><NavLink className='navbar-item' to='/'>Home</NavLink></li>
          <li><NavLink className='navbar-item' to='/map'>Map</NavLink></li>
          <li><NavLink className='navbar-item' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
