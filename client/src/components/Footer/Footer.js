import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer mt-5 pt-3 pb-1 footer-theme">
      <p className="pl-3">
        Clicky Game!
        <img alt="React logo" src="./favicon.ico" className="footer-img" />
      </p>
    </footer>
  );
}

export default Footer;