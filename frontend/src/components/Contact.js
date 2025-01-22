import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData)

      const data = await response.data;
      console.log('ghjg',data, response.data);
      
      if (response.status === 200) {
        console.log("Message sent successfully:", data);
        alert("Message sent successfully: " + JSON.stringify(data));
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert("Failed to send message: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Blog Vrese</title>
        <meta
          name="description"
          content="Reach out to us with your queries, suggestions, or feedback. We're here to help and would love to hear from you!"
        />
        <meta name="keywords" content="Contact, Support, Queries, Feedback" />
        <meta property="og:title" content="Contact Us | Blog verse" />
        <meta
          property="og:description"
          content="Get in touch with us for support or to provide feedback."
        />
        <meta
          property="og:image"
          content="https://example.com/path-to-your-contact-page-image.jpg"
        />
        <meta property="og:url" content="https://blog-verse-omega.vercel.app/#contact" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <div
          id="contact"
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <h2 className="contact-header">Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="name"
                className="input-text"
                style={{ fontSize: "1rem", color: "#333", marginBottom: "5px" }}
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="email"
                className="input-text"
                style={{ fontSize: "1rem", color: "#333", marginBottom: "5px" }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="message"
                className="input-text"
                style={{ fontSize: "1rem", color: "#333", marginBottom: "5px" }}
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  outline: "none",
                  height: "150px",
                  resize: "vertical",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <button
              type="submit"
              className="input-text"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "12px 20px",
                fontSize: "1rem",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
