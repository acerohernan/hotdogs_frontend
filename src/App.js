import React, { useContext } from "react";
import { Redirect, Router } from "@reach/router";

import { Context } from "./Context";
import { Home } from "./pages/Home";
import { Favs } from "./components/Favs";
import { Account } from "./pages/Account";
import { Details } from "./pages/Details";
import { GetInformation } from "./pages/GetInformation";
import { Register } from "./pages/Register";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { isAuth } = useContext(Context);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Favs path="/favs" />
        <Details path="/details/:dogId" />
        <Account path="/account" />
        <Register path="/register" />
        <GetInformation path="/information" />
      </Router>
    </>
  );
}

export default App;
