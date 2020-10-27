import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';
import Like from './images/like.svg';
import Volunteer from './images/volunteer.svg';
import Food from './images/diet.svg';

export class HomePage extends Component {
  render() {
    return (
      <motion.div 
        initial={{opacity: 0, transform: 'translateY(100px)'}}
        animate={{opacity: 1, transform: 'translateY(0px)'}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='home-page'
        >
        <section className='home-hero'>
          <div className='main-hero'>
          <h1>Welcome to your Community Fridge Finder!</h1>
          <Link to='/map' ><button className='hero-btn'>Find a Fridge!</button></Link>
          <Link to='/new_fridge' ><button className='hero-btn'>Submit a new Fridge!</button></Link>
          </div>
          <div className='scroll-down'><a className='icon' href='#about'><i class="fas fa-arrow-circle-down"></i></a></div>

        </section>
        <section className='about' id='about'>
          <div className='about-text'>
            <h2>About Community Fridges</h2>
            <p>Community fridges is a free space for communities to donate and receive food. </p>
          </div>
          <img className='about-image' src='https://images.unsplash.com/photo-1487770931682-b80013ed9cc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fridge'/>
        </section>
        <section className='how-to-help'>
          <div className='help-header'>
            <h2>How to Help</h2>
          </div>
          <div className='help-items'>
            <div className='help-item'>
              <img src={Food} className='help-image' alt='Fridge Donation'/>
              <h3>Donate</h3>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className='help-item'>
              <img src={Like} className='help-image' alt='Fridge Donation'/>
              <h3>Share</h3>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className='help-item'>
              <img src={Volunteer} className='help-image' alt='Fridge Donation'/>
              <h3>Volunteer</h3>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          </div>

        </section>
      </motion.div>
    )
  }
}

export default HomePage
