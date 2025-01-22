import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../Home.css";
import imgage from "../img/imgage.jpg"

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
        <meta property="og:url" content="https://blog-verse-omega.vercel.app/#home" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      <div
        id="home"
        style={{
          backgroundImage:`url(${imgage})`,
          
          // 'url("https://img.freepik.com/free-photo/black-white-portrait-digital-nomads_23-2151253998.jpg?t=st=1737178021~exp=1737181621~hmac=11bada85625ab8eb196ce8c663ddb874b983999da58610e43e3219c27b1da199&w=996")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "0 50px",
          position: "relative",
        }}
      >
        <div
          style={{
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out",
          }}
          aria-live="polite"
        >
          <h1
            style={{
              fontSize: "3rem",
              lineHeight: "1.2",
              marginBottom: "20px",
              fontWeight: "bold",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
              fontWeight: 800,
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
    </>
  );
};

export default Home;
