import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../Home.css";
import AboutUs from '../components/AboutUs';
import BlogCard from "../components/BlogCard";
import Contact from '../components/Contact';

const Home = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    "Discover the Wonders of the World,",
    "One Memorable Journey at a Time...",
    "Success Starts with Daily Positive Habits",
    "Small Steps Lead to Big Changes",
    "Your Dreams Are Worth the Effort",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <>
      <Helmet>
        <title>Home | Blog Verse</title>
        <meta
          name="description"
          content="Welcome to our website. Explore and be inspired by rotating motivational quotes."
        />
        <meta
          name="keywords"
          content="Motivational Quotes, Inspiration, Travel, Success"
        />
        <meta property="og:title" content="Blog Verse" />
        <meta
          property="og:description"
          content="Discover motivational quotes to brighten your day."
        />
        <meta
          property="og:image"
          content="https://example.com/path-to-your-image.jpg"
        />
        <meta
          property="og:url"
          content="https://blog-verse-omega.vercel.app/#home"
        />
      </Helmet>
      <div
        id="home"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/932763106/photo/cheerful-young-brunet-freelancer-is-smiling-typing-on-his-laptop-in-nice-modern-work-station.jpg?s=612x612&w=0&k=20&c=vsiKYyHnoYiqTNt3r04oqcfMFFrL_OZivyzNC5Y_FLI=)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "0 50px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#013d65",
            opacity: 0.7,
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out",
            position: "relative",
            zIndex: 2, 
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              lineHeight: "1.2",
              marginBottom: "20px",
              fontWeight: "bold",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
              fontStyle: "italic",
              margin: "10px 0",
            }}
          >
            {quotes[currentQuoteIndex]}
          </h1>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "90px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            zIndex: 2,
          }}
        >
          {quotes.map((_, index) => (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  index === currentQuoteIndex ? "#ff4d4f" : "#fff",
                transition: "background-color 0.3s",
              }}
              aria-hidden="true"
            ></div>
          ))}
        </div>
      </div>
      <AboutUs />
      <BlogCard />
      <Contact />
    </>
    
  );
};

export default Home;
