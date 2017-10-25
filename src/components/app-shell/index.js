import React from "react";
import styled from "styled-components";

/*
const AppShellComponent = styled.div`
  width: 100%;
  height: 100vh;
  color: red;
  background-color: #bada55;
`;
const AppShell = ({ children }) => (
  <AppShellComponent>{children}</AppShellComponent>
);
export default AppShell;
*/

const AppShell = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default styled(AppShell)`
  width: 100%;
  height: 100vh;
  color: red;
  background-color: #bada55;
`;
