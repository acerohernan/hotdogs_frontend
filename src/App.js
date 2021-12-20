import React from "react";
import { Router } from "@reach/router";

import { Home } from "./pages/Home";
import { Favs } from "./pages/Favs";
import { Account } from "./pages/Account";
import { Details } from "./pages/Details";
import { GetInformation } from "./pages/GetInformation";
import { SingUp } from "./pages/SignUp";
import { SingIn } from "./pages/SignIn";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Favs path="/favs" />
        <Details path="/details/:dogId" />
        <Account path="/account" />
        <SingUp path="/signup" />
        <SingIn path="/signin" />
        <GetInformation path="/information" />
      </Router>
    </>
  );
}

export default App;
