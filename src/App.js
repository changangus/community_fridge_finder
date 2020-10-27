import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import FridgeForm from './components/FridgeForm';
import HomePage from './components/HomePage';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/map' render={() => <Map />}/>
          <Route exact path='/new_fridge' render={() => <FridgeForm />} />
          <Route exact path='/contact' render={() => <Contact />} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
