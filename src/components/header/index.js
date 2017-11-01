import React from "react";
import Nav from "../nav";
import Auth from "../auth";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <header>
    <Wrapper>
      <Title>Favorite Songs</Title>
      <Auth />
    </Wrapper>
    <Nav />
  </header>
);

export default Header;
