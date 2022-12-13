import React, { useState } from "react";
import { navigate } from "@reach/router";

import { InfoContainer, Image, Form } from "./styles";

import { connect } from "react-redux";
import { activateAuthAction, addDogInfoAction } from "../../store/actions";

const GetInformation = ({ activateAuth, addDogInfo }) => {
  const [dogInfo, setDogInfo] = useState({});

  const handleInputChange = (e) => {
    setDogInfo({ ...dogInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDogInfo(dogInfo);
    activateAuth();
    navigate("/");
  };
  return (
    <InfoContainer>
      <Image src="https://image.freepik.com/vector-gratis/mejor-amigo-simbolo-perro-mascota-cara-cinta-roja_3446-319.jpg" />
      <Form onSubmit={handleSubmit}>
        <h1>CREATE A DOG ACCOUNT</h1>
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

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  activateAuth: () => dispatch(activateAuthAction()),
  addDogInfo: (dogInfo) => dispatch(addDogInfoAction(dogInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GetInformation);
