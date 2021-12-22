import React, { useState } from "react";

import { Link, navigate } from "@reach/router";
import { Form } from "./styles";
import { Title, Input, Button, SignUp, Buttons, LinkStyled } from "./styles";

export const UserForm = ({ title, signup, addUserInfo }) => {
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserInfo(userInfo);
    navigate("/hot-dogs/information");
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
    <Form onSubmit={handleSubmit}>
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
        {signup && <Link to="/hot-dogs/signin">Sign in</Link>}
        {!signup && <Link to="/hot-dogs/signup">Sign up</Link>}
      </SignUp>
      <Buttons>
        {signup && <Button type="submit">Sign up</Button>}
        {!signup && <Button type="submit">Sign in</Button>}
        <LinkStyled to="/hot-dogs/">Back to home</LinkStyled>
      </Buttons>
    </Form>
  );
};
