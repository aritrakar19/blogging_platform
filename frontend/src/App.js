import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from './components/Contact';
import Navber from './components/Navber';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import BlogCard from './components/BlogCard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>My React App</title>
        <meta name="description" content="Welcome to my React application. Explore our Home, About Us, Blog, and Contact sections for more." />
        <meta name="keywords" content="React, SEO, React Helmet, Blog, About Us, Contact" />
      </Helmet>
      <Navber />
      <Home />
      <AboutUs />
      <BlogCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
