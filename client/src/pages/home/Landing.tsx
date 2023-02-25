// React
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

// Styles:
import './landing.css';

// Bootstrap:
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Framer motion:
import { easeInOut, motion } from 'framer-motion';

const Landing = () => {

  let navigate = useNavigate();

  const [pageSection, setPageSection] = useState(false); // Sets if the user is on the landing page or the create game section
  const [buttonsActive, setButtonsActive] = useState({ flags: true, capitals: false }) // Sets game buttons

  function changeSection() { // On user navigation from landing page to game creation (or vice versa)
    setPageSection(!pageSection);
  }

  // Sets the type of animation Framer Motion will apply to the motion div
  const tween = {
    type: "tween",
    duration: .75,
    ease: easeInOut,
  }

  // SVG animation
  const transform = {
    open: { transform: 'scale(2)' },
    closed: { transform: 'scale(1)' },
  }

  // Header animation
  const slideOut = {
    open: { marginTop: '-100vh', padding: '0rem' },
    closed: { marginBottom: '100vh', padding: '1rem' },
  }

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: '0px', left: '0px', bottom: '0px', right: '0px', zIndex: '1', overflow: 'hidden' }}>
        <svg viewBox='0 0 800 400' className='svg__background'>
          <defs>
            <linearGradient id='mtnbg' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#c9bdde'></stop>
              <stop offset='100%' stopColor='#a18aab'></stop>
            </linearGradient>
          </defs>

          {/* <!THE SUN> */}
          <circle cx='100' cy='25' r='20' fill='#fbc73a'></circle>

          {/* <!BACKGROUND - MOUNTAINS> */}
          <path d='M0 400 L0 400 L0 150 L40 165 L100 150 L170 200 L220 140 L250 150 L260 140 L280 170 L320 145 L350 180 L400 130 L450 150 L480 140 L500 160 L550 175 L610 140 L640 165 L670 150 L690 130 L720 145 L750 170 L780 150 L800 140 L800 400 L0 400' fill='url(#mtnbg)'></path>
        </svg>

        <motion.svg viewBox='0 0 800 400' className='svg__pink-mountains' transition={tween} animate={pageSection ? "open" : "closed"} variants={transform}>

          {/* <!PINK - MOUNTAINS> */}
          <path d='M30 400 L30 400 L220 130 L300 220     L380 140 L440 200     L480 155 L520 135 L570 200   L610 160 L750 400 L30 400' fill='#b66586'></path>
          <path d='M220 130 L220 130 L256 170 Q256 180 220 170 Q198 160 192 170 L220 130     M380 140 L380 140 L415 175 Q415 185 380 175 Q355 165 345 175 L380 140     M480 155 L480 155 L520 135 L555 180 Q555 195 500 180 Q470 170 458 180 L480 155      M610 160 L610 160 L633.3 200  Q633.3 210 610 200  Q580 190 570 200 L610 160' fill='#ffffff'></path>
          <path d='M220 130 L220 130 L330 252 L230 251 L220 200 L230 160 L220 130     M380 140 L380 140 L520 280 L400 280 L410 250 L385 205 L380 140    M520 135 L520 135 L610 250 L530 250 L510 200 L520 135     M610 160 L610 160 L750 400 L610 400 L620 200' fill='#060809' opacity='0.3'></path>

        </motion.svg>

        <motion.svg viewBox='0 0 800 800' className='svg__purple-mountains' transition={tween} animate={pageSection ? "open" : "closed"} variants={transform}>

          {/* <!PURPLE - MOUNTAINS> */}
          <path d='M50 350 L50 350 L150 250 L185 285    L300 140 L400 275   L470 205 L520 250   L560 190 L600 220 L680 350 L50 350' fill='#6e517a'></path>
          <path d='M150 250 L150 250 L180 280 Q165 290 150 280 Q135 270 120 280 L150 250    M300 140 L300 140 L329.6 180 Q315 190 300 180 Q285 170 268.4 180 L300 140    M470 205 L470 205 L503 235 Q490 245 470 235 Q455 225 440 235 L470 205     M560 190 L560 190 L600 220 Q560 220 580 230 Q550 230 540 220 L560 190' fill='#ffffff'></path>
          <path d='M150 250 L150 250 L250 350 L130 350 L150 300 L140 280 L150 250     M300 140 L300 140 L455 350 L320 350 L280 280 L310 230 L295 170 L300 140    M470 205 L470 205 L630 350 L560 350 L490 280 L470 205              M560 190 L560 190 L600 220 L680 350 L640 350 L630 320 L600 280 L580 220' fill='#060809' opacity='0.3'></path>

        </motion.svg>

        <motion.svg viewBox='0 0 800 800' className='svg__ground' transition={tween} animate={pageSection ? "open" : "closed"} variants={transform}>
          {/* <!THE GROUND> */}
          <rect x='0' y='350' width='800' height='50' fill='#fdd36e'></rect>

          {/* <!GREEN HILLS> */}
          <path d='M100 350 L100 350 Q200 290 300 350 L100 350     M450 350 L450 350 Q600 290 700 350 L450 350' fill='#72c4be'></path>
          <path d='M200 320 L200 320 Q250 320 300 350 L200 350 L200 320     M600 320 L600 320 Q650 321 700 350 L600 350 L600 320' fill='#060809' opacity='0.3'></path>

          {/* <!YELLOW HILL> */}
          <path d='M280 350 L280 350 Q450 290 550 350 L350 350 L280 350' fill='#fbc73a'></path>
          <path d='M450 320 L450 320 Q500 322 550 350 L450 350 L450 320' fill='#060809' opacity='0.3'></path>

          {/* <!THE HOUSE> */}
          <path d='M200 350 L200 350 L200 335 L210 325 L220 335 L220 350' fill='#603f16'></path>
          <path d='M210 325 L210 325 L222 337 L224 335    L220 331 L220 324 L218 324 L218 329        L210 322 L196 335 L198 337' fill='#342312'></path>
          <rect x='205' y='340' width='5' height='10' fill='#342312'></rect>

          {/* <!THE OCEAN> */}
          <path d='M0 380 L0 380 Q200 360 400 380 Q600 400 800 380 L800 420 L0 420 L0 380' fill='#ffffff'></path>
          <path d='M0 390 L0 390 Q200 370 400 390 Q600 410 800 390 L800 430 L0 430 L0 390' fill='#84c2eb'></path>
          <path d='M0 400 L0 400 Q200 380 400 400 Q600 420 800 400 L800 440 L0 440 L0 400' fill='#51a3db'></path>
          <path d='M0 410 L0 410 Q200 390 400 410 Q600 430 800 410 L800 450 L0 450 L0 410' fill='#2c86c7'></path>
          <path d='M0 420 L0 420 Q200 400 400 420 Q600 440 800 420 L800 460 L0 460 L0 420' fill='#1365a6'></path>
          <path d='M0 430 L0 430 Q200 410 400 430 Q600 450 800 430 L800 800 L0 800 L0 430' fill='#17517b'></path>

          {/* <!THE OCEAN> */}
          <rect x='300' y='340' width='5' height='10' fill='#342312'></rect>
        </motion.svg>
      </div>
      <div className='bg__image'>

        <motion.div className='landing__center' id='home' initial={false} transition={tween} animate={pageSection ? "open" : "closed"} variants={slideOut}>
          <h1>Geotrainer</h1>
          <p>A fun way to learn country flags, capitals, and more 🌏</p>
          <Button variant="primary" size='lg' onClick={() => changeSection()}>Play Now</Button>
        </motion.div>

        <motion.div className='landing__center' id='create' initial={false} transition={tween} animate={pageSection ? "closed" : "open"} variants={slideOut}>
          <p style={{ cursor: 'pointer' }} onClick={() => changeSection()}>Back to top</p>
          <h1>Choose Your Topic</h1>
          <p>Select your game preferences</p>
          <ButtonGroup aria-label="Game styles">
            <Button variant="outline-secondary" className='game__button' active={buttonsActive.flags} onClick={() => setButtonsActive({ ...buttonsActive, flags: true, capitals: false })}>Flags</Button>
            <Button variant="outline-secondary" className='game__button' active={buttonsActive.capitals} onClick={() => setButtonsActive({ ...buttonsActive, capitals: true, flags: false })}>Capitals</Button>
          </ButtonGroup>
          <Button variant="primary" className='game__button' onClick={() => navigate('/train')}>Start</Button>
        </motion.div>
      </div>
    </>
  )
}

export default Landing