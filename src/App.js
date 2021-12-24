import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Favs from "./pages/Favs";
import Account from "./pages/Account";
import Details from "./pages/Details";
import GetInformation from "./pages/GetInformation";
import SingUp from "./pages/SignUp";
import SingIn from "./pages/SignIn";
import Inbox from "./pages/Inbox";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router basepath="/hot-dogs/">
        <Home path="/" />
        <Favs path="/favs" />
        <Details path="/details/:dogId" />
        <Account path="/account" />
        <Inbox path="/inbox" />
        <SingUp path="/signup" />
        <SingIn path="/signin" />
        <GetInformation path="/information" />
      </Router>
    </Provider>
  );
}

export default App;
