import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/projects" element={<ProjectList/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} /> */}
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
