import React from 'react'
import People from './components/People';
import Places from './components/Places';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import PeoplePage from './Pages/PeoplePage';
import PlacesPage from './Pages/PlacesPage';

 
function App() {


  return (
    <>
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/People' element={<PeoplePage />} />
          <Route path='/Places' element={<PlacesPage />} />
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
