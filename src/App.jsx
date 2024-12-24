import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import PeoplePage from './Pages/PeoplePage';
import PlacesPage from './Pages/PlacesPage';
import PreLoad from './Pages/PreLoad';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/Land' element={<LandingPage />} />
          <Route path='/' element={<PreLoad />} />
          <Route path='/People' element={<PeoplePage />} />
          <Route path='/Places' element={<PlacesPage />} />

          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>)
}

export default App
