// React
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import { Landing, Flags, Capitals } from '../pages';

// Framer motion
import { AnimatePresence } from 'framer-motion';


export const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Landing/>}/>
        <Route path='/flags' element={<Flags/>}/>
        <Route path='/Capitals' element={<Capitals/>}/>
      </Routes>
    </AnimatePresence>
  )
}
