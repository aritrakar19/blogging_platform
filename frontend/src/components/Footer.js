import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Novanectar Service Pvt. Ltd. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
