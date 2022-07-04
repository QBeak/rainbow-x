import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Rain from './Components/rainApp/rainApp';
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'; /*this has not been implemented yet*/
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });
  return (  
    <ThemeContext.Provider>
      <div className="App" id='Dark'> 
      <Router>
          {/* <div className='app-Navbar'><Navbar/></div> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rainbowApp' element={<Rain/>}/>
          </Routes>
        <div className='fs-main'><Footer/></div>  
      </Router> 

    </div>
    </ThemeContext.Provider>  
  );
}

export default App;
