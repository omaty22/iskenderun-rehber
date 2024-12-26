import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import AnimatedPages from './components/AnimatedPages';

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
        <AnimatedPages/>
      </BrowserRouter>
    </div>)
}

export default App
