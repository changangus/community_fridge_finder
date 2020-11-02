import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import './Map.css';

export class Map extends Component {
  render() {
    return (
      <motion.div
        initial={{opacity: 0, transform: 'translateY(100px)'}}
        animate={{opacity: 1, transform: 'translateY(0px)'}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='map-container' >
        <iframe className='map' title='fridge map' src="https://www.google.com/maps/d/embed?mid=1AaAr2PLAMUWDLTi5js0hw0a9DX7Yrx3f&hl=en"></iframe>
      </motion.div>
    )
  }
}

export default Map
