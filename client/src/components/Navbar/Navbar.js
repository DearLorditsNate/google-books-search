import React from "react";
import "./style.css";

function Navbar() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top nav-theme navbar-header text-white">
          <div>
            <h2 className="col">
              <a className="logo" href="/">Google Books</a>
            </h2>
          </div>
          <div>
            <h3 className="col">
              <a href="/">Search</a>
            </h3>
          </div>
          <div>
            <h3 className="col">
              <a href="/saved">Saved</a>
            </h3>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;