import React from "react";
import { Helmet } from "react-helmet";
import "../AboutUs.css"; 

const AboutUs = () => {
  return (
    <section id="about" className="section">
      <Helmet>
        <title>About Us - Unlock Your Potential</title>
        <meta
          name="description"
          content="Discover our mission to empower individuals through knowledge and innovation. Join us on a journey to inspire growth and create lasting impact."
        />
        <meta
          name="keywords"
          content="About Us, Empowerment, Growth, Knowledge, Innovation, Collaboration"
        />
        <meta property="og:title" content="Blog Verse - Unlock Your Potential" />
        <meta
          property="og:description"
          content="Discover our mission to empower individuals through knowledge and innovation. Join us on a journey to inspire growth and create lasting impact."
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/black-white-portrait-digital-nomads_23-2151253975.jpg"
        />
        <meta property="og:url" content="https://blog-verse-omega.vercel.app/#about" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>

      <div className="container">
        <div className="text-container">
          <h4 className="heading4">Who We Are</h4>
          <h1 className="heading1">
            Unlock Your Potential: Empowering Growth, Inspiring Futures.
          </h1>
          <p className="paragraph">
            Welcome to our platform, where passion meets purpose. We are
            dedicated to providing opportunities for personal and professional
            growth through innovative resources and a nurturing community. Here,
            your journey towards knowledge and success begins with endless
            possibilities at your fingertips.
          </p>
          <button className="button">Join Us Today</button>
        </div>

        <div className="image-container">
          <img
            src="https://img.freepik.com/free-photo/black-white-portrait-digital-nomads_23-2151253975.jpg"
            alt="Our Team"
            className="image"
          />
        </div>
      </div>

      <div className="mission-vision-approach">
        <div className="box">
          <h2 className="box-heading">Our Mission</h2>
          <p className="box-paragraph">
            To empower individuals by offering knowledge-driven solutions that
            foster growth, creativity, and a lasting positive impact. We believe
            in creating opportunities that transform lives and communities.
          </p>
        </div>
        <div className="box">
          <h2 className="box-heading">Our Vision</h2>
          <p className="box-paragraph">
            To inspire innovation and collaboration, paving the way for a
            brighter, more inclusive future. Together, we aim to build a world
            where potential has no limits, and success is within reach for
            everyone.
          </p>
        </div>
        <div className="box">
          <h2 className="box-heading">Our Approach</h2>
          <p className="box-paragraph">
            Through creativity, collaboration, and commitment, we develop
            impactful solutions tailored to individual and collective needs. Our
            approach centers on delivering excellence, ensuring sustainable
            growth, and making a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
