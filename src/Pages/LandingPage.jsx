import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className='w-full overflow-hidden'>
        <ToastContainer />
        <Header />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default LandingPage