import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Meteors from './components/BG';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="relative App text-black bg-gray-300 overflow-hidden">

        <div className="absolute inset-0 z-0">
          <Meteors />
        </div>

        <div className="relative z-10">
          <Header />
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Resume" element={<Resume />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

