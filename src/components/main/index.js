import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Home from "../../scenes/home";

const MainWrapper = styled.main`
  width: 100%;
  display: block;
  padding: 1rem;
  background-color: orange;
`;

const Main = () => (
  <MainWrapper>
    <h2>Main Component</h2>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  </MainWrapper>
);

export default Main;
