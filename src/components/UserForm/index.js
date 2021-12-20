import React, { useState, useContext } from "react";

import { Link, navigate } from "@reach/router";
import { Form } from "./styles";
import { Title, Input, Button, SignUp, Buttons, LinkStyled } from "./styles";

import { Context } from "../../Context";

export const UserForm = ({ title, signup }) => {
  const [userInfo, setUserInfo] = useState({});
  const { addUserInfo } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserInfo(userInfo);
    navigate("/information");
  };

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
        .toLocaleLowerCase()
        .replace(/ /g, ""),
    });
  };

  return (
    <Form>
      <Title>{title}</Title>
      {signup && (
        <Input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
        />
      )}
      <Input
        required
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
      />
      <Input
        required
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
      />
      <SignUp>
        Do you have an acount?
        {signup && <Link to="/signin">Sign in</Link>}
        {!signup && <Link to="/signup">Sign up</Link>}
      </SignUp>
      <Buttons>
        {signup && (
          <Button onClick={handleSubmit} type="submit">
            Sign up
          </Button>
        )}
        {!signup && (
          <Button onClick={handleSubmit} type="submit">
            Sign in
          </Button>
        )}
        <LinkStyled to="/">Back to home</LinkStyled>
      </Buttons>
    </Form>
  );
};
