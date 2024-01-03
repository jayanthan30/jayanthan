import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './component/Home/Home';
import Footer from './footer/footer';
import SignIn from './component/signin/SignIn';
import SignUp from './component/signup/SignUp';
import About from './component/about/about';
import Contact from './component/contact/contact';
function App() {
  return (
    <Router>
      <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
    
  );
}

export default App;
