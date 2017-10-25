import React from "react";
import Header from "./header";
import Main from "./main";
import AppShell from "./app-shell";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <AppShell>
      <Header />
      <Main />
    </AppShell>
  </BrowserRouter>
);

export default App;
