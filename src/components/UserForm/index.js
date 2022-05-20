import React, { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {TiWarningOutline as WarningIcon} from "react-icons/ti";


import { Link, navigate } from "@reach/router";
import { ErrorMessage, Form, ModalButton, ModalContainer } from "./styles";
import { Title, Input, Button, SignUp, Buttons, LinkStyled } from "./styles";
import { regExpEmail } from "../../utils/reExp";
import API from "../../api";

export const UserForm = ({ title, signup, addUserInfo, isAuth, logIn }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token") || "";
  const {register, handleSubmit, formState: {errors}} = useForm();

  useEffect(() => {
    if(isAuth){
      navigate('/hot-dogs/choose')
    };
  }, [isAuth]);

  const onSubmit = async(data) => {
    setLoading(true);
    try{
      const response = await API.auth.login(data);
      toast.success(response.data.message || "Success");
      localStorage.setItem("token", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      logIn();
      setLoading(false);
    }catch(err){
      if(err.response.status === 406){
        const message = err.response.data.message;
        const userId = err.response.data.data;
        toast((t) => CloseSessionModal(t, message, userId));
        setLoading(false);
      }else{
        toast.error(err.response.data.message || "Error");
        setLoading(false);
      };
    };
  };

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
        .toLocaleLowerCase()
        .replace(/ /g, ""),
    });
  };

  const handleLogoutoOfAllDevices = (t, userId) => async() => {
    toast.dismiss(t.id)
    setLoading(true);
    try{
      await API.auth.logout({userId});
      toast.success("Session in other devices is close");
      setLoading(false);
    }catch(err){
      toast.error(err.response.data.message || err.message);
      setLoading(false);
    }
  };
  
  const showErrorMessage = (name) => {
    if(!errors[`${name}`]) return null;

    return <ErrorMessage style={{}}>
      <WarningIcon height={10} width={10}/>
      <span>{errors[`${name}`].message}</span>
    </ErrorMessage>
  }

  const CloseSessionModal = (t, message, userId) => (
    <ModalContainer>
      <span>
        {message}
      </span>
    <button onClick={handleLogoutoOfAllDevices(t, userId)}>
      Close session
    </button>
  </ModalContainer>
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        type="text"
        placeholder="Email"
        name="email"
        {...register('email', {
          required: "Email is required",
          pattern: {
            value: regExpEmail,
            message: "Enter a valid email"
        }
        })}
      />
      {showErrorMessage("email")}
      <Input
        type="password"
        placeholder="Password"
        name="password"
        {...register('password', {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "The password need to have 6 characters at least"
          }
        })}
      />
      {showErrorMessage("password")}
      <SignUp>
        Do you have an acount?
        {signup && <Link to="/hot-dogs/signin">Sign in</Link>}
        {!signup && <Link to="/hot-dogs/signup">Sign up</Link>}
      </SignUp>
      <Buttons>
        <LinkStyled to="/hot-dogs/">Back to home</LinkStyled>
        {signup && <Button type="submit">Sign up</Button>}
        {!signup && <Button type="submit">Sign in</Button>}
      </Buttons>
    </Form>
  );
};
