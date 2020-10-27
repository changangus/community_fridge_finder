import React, { Component } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './FridgeForm.css';

export class FridgeForm extends Component {

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
        <h1>Submit a Fridge!</h1>
        <h3 className='note'>Note: Fridge locations are reviewed before they are posted</h3>
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
            <label htmlFor="address">Fridge Address*</label>
            <input type="text" name="address" id="address" required/>
          </div>
          <div className="field">
            <label htmlFor="message">Additional Comments</label>
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

export default FridgeForm
