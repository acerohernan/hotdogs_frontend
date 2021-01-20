import React, { useState, useContext } from "react";

import { Link, navigate } from "@reach/router";

import { Context } from "../../Context";

import { Form } from "./styles";
import { Register } from "./styles";

export const UserForm = ({ submitInfo, title, footerMsg, login }) => {
  const [userInfo, setUserInfo] = useState({});
  const { addUserInfo } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserInfo(userInfo);
    navigate("/information");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              [e.target.name]: e.target.value
                .toLocaleLowerCase()
                .replace(/ /g, ""),
            });
          }}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
          }}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
          }}
        />
        <Register>
          {footerMsg} <Link to="/register">{login ? "Register" : "Login"}</Link>
        </Register>
        <button type="submit">{login ? "LOGIN" : "REGISTER"}</button>
      </Form>
    </>
  );
};
