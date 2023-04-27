import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from './components/Wrapper';
import About from './components/Pages/About';
import Trotter from "../src/components/Pages/Trotter";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Trotter" element={<Trotter/>} /> 
            <Route path="/About" element={<About/>} /> 
          </Routes>
          </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
