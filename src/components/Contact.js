import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

export class Contact extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('fridge_finder', 'fridge_finder', e.target, 'user_tvaQ25QNww566YeTJXQFI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
      <motion.div 
        initial={{opacity: 0, transform: 'translateY(100px)'}}
        animate={{opacity: 1, transform: 'translateY(0px)'}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='form'>
        <h1>Contact Us</h1>
        <h3 className='note'>If you'd like to submit a fridge please do so at our new fridge form. Otherwise please reach out with any questions or comments!</h3>
        <Link className='new-fridge' to='/new_fridge'>
          <div>Submit New Fridge!</div>
        </Link>
        <form id="form" onSubmit={sendEmail}>
          <div className="field">
            <label htmlFor="subject">Subject Line</label>
            <input type="text" name="subject" id="subject"/>
          </div>
          <div className="field">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="field">
            <label htmlFor="email">Your Email*</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"/>
          </div>
          <div className='button'>
            <input type="submit" id="button" value="Submit" />
          </div>
        </form>
      </motion.div>
    )
  }
}

export default Contact
