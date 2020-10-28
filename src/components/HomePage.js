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
          <div className='scroll-down'><span className='icon'><i className="fas fa-arrow-circle-down"></i></span></div>

        </section>
        <section className='about' id='about'>
          <div className='about-text'>
            <h2>About Community Fridges</h2>
            <p>The purpose of a Community Fridge is to help deal with food insecurity and to reduce the amount of food waste, while also bringing communities closer together. Public fridges are easy to use, many run 24/7 and are placed in public areas that are accessible to anyone.  </p>
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
              <p>One way is to help keep your community fridge stocked! Have excess produce? Bought way too much milk (make sure its not bad..)? D'you Collect all the bagels that are being thrown out at that bagel shop? Bring them to your community fridge!</p>
            </div>
            <div className='help-item'>
              <img src={Like} className='help-image' alt='Fridge Donation'/>
              <h3>Share</h3>
              <p>Another is to share to others what community fridges are and how to find them. Whether you do so on social media or help guide someone in need to this site or others like it. Sometimes those who experience any kind of hardship are unaware of all the resources available to them.</p>
            </div>
            <div className='help-item'>
              <img src={Volunteer} className='help-image' alt='Fridge Donation'/>
              <h3>Volunteer</h3>
              <p>Volunteer! Many community fridges offer volunteer opportunities to help maintain the facilities used. Maybe your community doesn't have a community fridge and you're wondering if you can start one. Well you can! Check out this group called Freedge, they have a ton of resources and even grants to help people like you get started.</p>
            </div>
          </div>

        </section>
      </motion.div>
    )
  }
}

export default HomePage
