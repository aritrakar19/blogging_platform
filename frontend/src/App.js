import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navber from './components/Navber';
import Home from './components/Home';
import Footer from './components/Footer';
// import BlogDetails from './components/BlogDetails';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <title>My React App</title>
          <meta
            name="description"
            content="Welcome to my React application. Explore our Home, About Us, Blog, and Contact sections for more."
          />
          <meta
            name="keywords"
            content="React, SEO, React Helmet, Blog, About Us, Contact"
          />
        </Helmet>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
