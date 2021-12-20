import React, { useState, useContext } from "react";

import { Link, navigate } from "@reach/router";
import { Form } from "./styles";
import { Title, Input, Button, SignUp, Buttons, LinkStyled } from "./styles";

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
      <Form>
        <Title>{title}</Title>
        <Input
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
        <Input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
          }}
        />
        <Input
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
        <Buttons>
          <Button onClick={handleSubmit} type="submit">
            Sign up
          </Button>
          <LinkStyled to="/">Back to home</LinkStyled>
        </Buttons>
      </Form>
    </>
  );
};
