import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming your navbar styles are here

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Site Name</Link>
      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
      </ul>
    </nav>
  );
}
