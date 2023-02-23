// React
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import { Landing, Train } from '../pages';

// Framer motion
import { AnimatePresence } from 'framer-motion';


export const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Landing/>}/>
        <Route path='/train' element={<Train/>}/>
      </Routes>
    </AnimatePresence>

  )
}
