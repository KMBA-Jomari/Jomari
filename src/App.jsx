import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import JtLogo from './assets/jt.png'
import './App.css'
import Preloader from './components/Preloader'

function App() {
  const handleClick = () => {
    alert("I love you Kan❤️")
  }

  return (
    <>
      <Preloader />
      
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={JtLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1>Error 503</h1>
        <p>This Page is Under Maintenance</p>
        <div className="card">
          <button className='btn btn-dark' onClick={handleClick}>
            Click Here
          </button>
        </div>
        <p className="read-the-docs">
          Click on the button to continue.
        </p>
      </div>
    </>

    
  )
}

export default App
