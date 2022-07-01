import React from "react";
import {Toaster} from "react-hot-toast";
import { Router} from "@reach/router";
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
import ChooseDog from "./pages/ChooseDog";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Redirect } from "@reach/router";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Toaster position="top-center" reverseOrder={false}/>
      <Router basepath="/hotdogs_frontend/">
        <Home path="/" />
        <Favs path="/favs" />
        <Details path="/details/:dogId" />
        <Account path="/account" />
        <Inbox path="/inbox" />
        <SingUp path="/signup" />
        <SingIn path="/signin" />
        <ChooseDog path="/choose"/>
        <GetInformation path="/information" />
      </Router>
    </Provider>
  );
}

export default App;
