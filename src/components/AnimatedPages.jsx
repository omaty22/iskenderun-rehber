import React, { use } from 'react'
import LandingPage from '../Pages/LandingPage';
import PeoplePage from '../Pages/PeoplePage';
import PlacesPage from '../Pages/PlacesPage';
import PreLoad from '../Pages/PreLoad';
import ErrorPage from '../Pages/ErrorPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function AnimatedPages() {
    const Loacation=useLocation();
  return (
    <AnimatePresence>
      <Routes Location={Loacation} key={Location.pathname}>
          <Route path='/Land' element={<LandingPage />} />
          <Route path='/' element={<PreLoad />} />
          <Route path='/People' element={<PeoplePage />} />
          <Route path='/Places' element={<PlacesPage />} />

          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedPages
