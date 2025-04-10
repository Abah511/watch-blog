import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import blogs from './data/blogs';  // Corrected import
import BlogDetail from './pages/BlogDetail';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';
import Admin from './pages/Admin';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
