import React, { useContext } from "react";
import { Redirect, Router } from "@reach/router";

import { Context } from "./Context";
import { Home } from "./pages/Home/index";
import { Favs } from "./components/Favs/index";
import { Account } from "./pages/Account/index";
import { Details } from "./pages/Details";
import { GetInformation } from "./pages/GetInformation/index";
import { Register } from "./pages/Register/index";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { isAuth } = useContext(Context);

  return (
    <>
      <GlobalStyles />
      <Router>
        {!isAuth && <GetInformation path="/information" />}
        {!isAuth && <Register path="/register" />}
        {!isAuth && <Redirect from="/home" to="/register" noThrow />}
        {!isAuth && <Redirect from="/favs" to="/register" noThrow />}
        {!isAuth && <Redirect from="/account" to="/register" noThrow />}
        {!isAuth && <Redirect from="/details" to="/register" noThrow />}
        {isAuth && <Redirect from="/information" to="/home" noThrow />}
        {isAuth && <Redirect from="/register" to="/home" noThrow />}
        <Redirect from="/" to="register" noThrow />
        <Favs path="/favs" />
        <Home path="/" />
        <Home path="/home" />
        <Details path="/details/:dogId" />
        <Account path="/account" />
      </Router>
    </>
  );
}

export default App;
