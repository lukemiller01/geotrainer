// React
import { useNavigate, useLocation, redirect } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

// Styles:
import './landing.css';

// Bootstrap:
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Framer motion:
import {easeInOut, motion} from 'framer-motion';

const Landing = () => {

  let navigate = useNavigate();
  let location = useLocation();

  // Handles browser changes (URL manually typed in & forward/backward)
  useEffect(() => {
    if(location.hash === '#create') {
      setPageSection(true);
      location.hash.replace("#create", "#home");
    }
    else {
      setPageSection(false);
    }
  }, [location])

  useEffect(() => {
    document.body.className = 'hidden';
  }, []);

  const [pageSection, setPageSection] = useState(false); // Sets if the user is on the landing page or the create game section
  const [buttonsActive, setButtonsActive] = useState({flags: true, capitals: false})

  // Sets the type of animation Framer Motion will apply to the motion div
  const tween = {
    type: "tween",
    duration: .75,
    ease: easeInOut,
  }

  // Sets the different types of styles that the transition will occur over
  const variants = {
    open: {backgroundSize: 'auto 100%'},
    closed: {backgroundSize: 'auto 150%'},
  }
  
  return (
    <div className='bg__container'>
      <motion.div className='bg__image' transition={tween} animate={pageSection ? "open" : "closed"} variants={variants}>
        <div className='landing__center' id='home'>
          <h1>Geotrainer</h1>
          <p>A fun way to learn country flags, capitals, and more 🌏</p>
          <HashLink smooth to='/#create'>
            <Button variant="primary" size='lg'>Play Now</Button>
          </HashLink>
        </div>
        <div className='landing__center' id='create'>
          <HashLink smooth to='/#home'>
            <p>Back to top</p>
          </HashLink>
          <h1>Choose Your Topic</h1>
          <p>Select your game preferences</p>
          <ButtonGroup aria-label="Game styles">
            <Button variant="outline-secondary" className='game__button' active={buttonsActive.flags} onClick={() => setButtonsActive({...buttonsActive, flags: true, capitals: false})}>Flags</Button>
            <Button variant="outline-secondary" className='game__button' active={buttonsActive.capitals} onClick={() => setButtonsActive({...buttonsActive, capitals: true, flags: false})}>Capitals</Button>
          </ButtonGroup>
          <Button variant="primary" className='game__button' onClick={() => navigate('/train')}>Start</Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Landing