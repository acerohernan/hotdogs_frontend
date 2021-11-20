import React, { useState, useContext } from "react";

import { Link, navigate } from "@reach/router";
import { Form } from "./styles";
import { SignUp } from "./styles";

import { Context } from "../../Context";

export const UserForm = ({ title }) => {
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
        <SignUp>
          Do you have an acount? <Link to="/SignUp">Sign up</Link>
        </SignUp>
        <button type="submit">Sign up</button>
      </Form>
    </>
  );
};
