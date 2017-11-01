import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = () => (
  <NavStyled>
    <Link to="/">Home </Link>
    <Link to="/artists">Artists </Link>
  </NavStyled>
);

export default Nav;
