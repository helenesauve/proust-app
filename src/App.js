import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Trotter from "./components/Pages/Trotter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Trotter" element={<Trotter/>} /> 
          </Routes>
          </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
