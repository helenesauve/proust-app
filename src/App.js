import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from './components/Wrapper';
import About from './components/Pages/About';
import Trotter from "../src/components/Pages/Trotter";


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (

    <div className={`App ${theme}`}>
      <label class="switch">
        <input onClick={toggleTheme} type="checkbox" />
          <span class="slider round"></span>
      </label>
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Trotter" element={<Trotter />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;
