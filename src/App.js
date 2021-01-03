import React from "react";
import { Router } from "@reach/router";

import { HeaderCard } from "./components/HeaderCard";
import { FooterCard } from "./components/FooterCard/index";
import { Card } from "./components/Card/index";
import { Favs } from "./components/Favs/index";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderCard />
      <Router>
        <Card path="/home" />
        <Favs path="/favs" />
      </Router>
      <FooterCard />
    </>
  );
}

export default App;
