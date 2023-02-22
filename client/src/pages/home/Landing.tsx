// React
import React from 'react';
import { useNavigate } from "react-router-dom";

// Styles:
import './landing.css';

// Bootstrap:
import Button from 'react-bootstrap/Button';

// Framer motion:
import {easeInOut, motion} from 'framer-motion';

const Landing = () => {

  let navigate = useNavigate();

  function newGame() {
    navigate(`/create`);
  }

  const spring = {
    type: "tween",
    duration: .75,
    ease: easeInOut,
  }

  // transition={spring} initial={{backgroundSize: '150% 150%'}} animate={{backgroundSize: '100% 100%'}} exit={{backgroundSize: '150% 150%'}}
  
  return (
    // <div className='bg__container'>
      <motion.div className='bg__image' >
        <div className='landing__center'>
          <h1>Geotrainer</h1>
          <p>A fun way to learn country flags, capitals, and more 🌏</p>
          <Button variant="primary" size='lg' onClick={newGame}>Play Now</Button>
        </div>
      </motion.div>
    // </div>
  )
}

export default Landing