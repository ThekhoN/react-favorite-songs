import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <Link to="/">Home </Link>
    <Link to="/artists">Artists </Link>
  </nav>
);

export default Nav;
