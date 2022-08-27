import React from "react";

function Navbar() {
  return (
    <nav>
      <div
        className="navbar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="left">
          <h1>Shortly</h1>
        </div>
        <div className="mid">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </div>
        <div className="right">
          <li>Login</li>
          <li>Sign Up</li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
