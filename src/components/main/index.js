import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Home from "../../scenes/home";
import Artists from "../../scenes/artists";

const MainWrapper = styled.div`
  width: 100%;
  display: block;
  padding: 1rem;
  background-color: orange;
`;

const Main = () => (
  <MainWrapper>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/artists" exact component={Artists} />
      <Redirect to="/" />
    </Switch>
  </MainWrapper>
);

export default Main;
