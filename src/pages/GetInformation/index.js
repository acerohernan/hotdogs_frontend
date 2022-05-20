import React, { useState } from "react";
import { navigate } from "@reach/router";
import {TiWarningOutline as WarningIcon} from "react-icons/ti";

import { InfoContainer, Image, Form, ErrorMessage } from "./styles";

import { connect } from "react-redux";
import { activateAuthAction, addDogInfoAction } from "../../store/actions";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import API from "../../api";

const GetInformation = ({ activateAuth, addDogInfo }) => {
  const [dogInfo, setDogInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm();

  const handleInputChange = (e) => {
    setDogInfo({ ...dogInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async(data) => {
    setLoading(true);
    try{
      const response = await API.dog.create(data);
      toast.success(response.data?.message || "Dog created successfully.");
      setLoading(false);
      navigate("/hot-dogs/choose");
    }catch(err){
      toast.error(err.response?.data?.message || "An error was ocurred");
      setLoading(false);
    };
  };

  const showErrorMessage = (name) => {
    if(!errors[`${name}`]) return null;

    return <ErrorMessage style={{}}>
      <WarningIcon height={10} width={10}/>
      <span>{errors[`${name}`].message}</span>
    </ErrorMessage>
  };

  return (
    <InfoContainer>
      <Image src="https://image.freepik.com/vector-gratis/mejor-amigo-simbolo-perro-mascota-cara-cinta-roja_3446-319.jpg" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>CREATE A DOG ACCOUNT</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          {...register('first_name', {
            required: "First name is required.",
            min: {
              value: 6,
              message: "First name must have 6 characters."
            }
          })}
        />
        {showErrorMessage('first_name')}
        <input
          name="age"
          type="number"
          placeholder="Age"
          {...register('age', {
            required: "Age is required.",
            maxLength: {
              value: 2,
              message: "Age must have only 2 characters."
            }
          })}
        />
        {showErrorMessage('age')}       
        <input
          type="text"
          name="breed"
          placeholder="Breed (Raza)"
          {...register('breed', {
            required: "Breed is required."
          })}
        />
        {showErrorMessage('breed')}
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          {...register('height', {
            required: "Height is required."
          })}
        />
        {showErrorMessage('height')}
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          {...register('gender', {
            required: "Gender is required."
          })}
        />
        {showErrorMessage('gender')}
        <input
          type="text"
          name="birthday_date"
          placeholder="Birthday date"
          {...register('birthday_date', {
            required: "Birthday date is required."
          })}
        />
        {showErrorMessage('birthday_date')}
        <input
          type="text"
          name="preferences"
          placeholder="Preferences"
          {...register('preferences', {
            required: "Preferences is required."
          })}
        />
        {showErrorMessage('preferences')}
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
