import React, { useState, useContext } from "react";

import { InfoContainer, Image, Form } from "./styles";

import { Context } from "../../Context";

export const GetInformation = () => {
  const [accountInfo, setAccountInfo] = useState({});
  const { userInfo, addUserInfo, activateAuth } = useContext(Context);

  const handleInputChange = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addUserInfo({ ...userInfo, ...accountInfo });
    activateAuth();
  };
  return (
    <InfoContainer>
      <Image src="https://image.freepik.com/vector-gratis/mejor-amigo-simbolo-perro-mascota-cara-cinta-roja_3446-319.jpg" />
      <Form onSubmit={handleSubmit}>
        <h1>CREATE DOG ACCOUNT</h1>
        <input
          required
          type="text"
          name="firstName"
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          required
          type="number"
          name="age"
          onChange={handleInputChange}
          placeholder="Age"
        />
        <input
          required
          type="text"
          name="breed"
          onChange={handleInputChange}
          placeholder="Breed (Raza)"
        />
        <input
          required
          type="number"
          name="height"
          onChange={handleInputChange}
          placeholder="Height (cm)"
        />
        <input
          required
          type="text"
          name="gender"
          onChange={handleInputChange}
          placeholder="Gender"
        />
        <input
          required
          type="text"
          name="birthday"
          onChange={handleInputChange}
          placeholder="Birthday"
        />
        <input
          required
          type="text"
          name="preferences"
          onChange={handleInputChange}
          placeholder="Preferences"
        />
        <button type="submit">Create</button>
      </Form>
    </InfoContainer>
  );
};
