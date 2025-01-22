import React, { useState, useEffect, useRef } from "react";
import "../Navber.css";

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const menuRef = useRef(null); 
  const menuIconRef = useRef(null); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const updateView = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateView);
    document.addEventListener("mousedown", handleClickOutside); 

    updateView();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateView);
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
        padding: "10px 20px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background-color 0.3s ease",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}>
        <span style={{ color: "#fff" }}>Blog</span>
        <span style={{ color: "#ff4d4f" }}>Verse.</span>
      </div>

      {!isMobileView && (
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "40px",
            alignItems: "center",
            margin: 0,
            padding: 0,
            marginRight: "100px",
          }}
          className="desktop-menu"
        >
          <li>
            <a href="#home" className="menu-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="menu-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#blog" className="menu-link">
              BLOG
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-link">
              CONTACT
            </a>
          </li>
        </ul>
      )}

      {isMobileView && (
        <div
          onClick={toggleMobileMenu}
          ref={menuIconRef}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
          className="mobile-menu-icon"
        >
          <span
            style={{ width: "25px", height: "2px", backgroundColor: "#fff" }}
          ></span>
          <span
            style={{ width: "25px", height: "2px", backgroundColor: "#fff" }}
          ></span>
          <span
            style={{ width: "25px", height: "2px", backgroundColor: "#fff" }}
          ></span>
        </div>
      )}

      {isMobileMenuOpen && isMobileView && (
        <ul
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          backgroundColor: "#151212",
          listStyle: "none",
          padding: "20px",
          borderRadius: "5px",
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          zIndex: 999,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "90px",
        }}
      >
        <li
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 1001,
          }}
        >
          <button
            onClick={toggleMobileMenu}
            style={{
              backgroundColor: "transparent",
              color: "#ff4d4f",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </li>
      
        <li>
          <a
            href="#home"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </a>
        </li>
      </ul>
      )}
    </nav>
  );
};

export default Navber;
