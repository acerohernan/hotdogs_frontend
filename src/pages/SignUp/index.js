import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {TiWarningOutline as WarningIcon} from "react-icons/ti";
import API from "../../api";

import { Container, Image, Form, Title, Input, SignUp, Buttons, Button, LinkStyled,ErrorMessage } from "./styles";

import { signUpAction } from "../../store/actions";
import { regExpEmail } from "../../utils/reExp";
import { navigate } from "@reach/router";

const SignUpPage = ({ signUpMethod }) => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onSubmit = async(data) => {
    try{
      const response = await API.auth.register(data);
      toast.success(response.data?.message || "Success");
      toast.success("Please login with your new account to continue.");
      navigate('/hotdogs_frontend/signin');
    }catch(err){
      toast.error(err.response?.message || "An error was ocurred");
    }
  };

  const password_value = watch('password');

  const showErrorMessage = (name) => {
    if(!errors[`${name}`]) return null;

    return <ErrorMessage style={{}}>
      <WarningIcon height={10} width={10}/>
      <span>{errors[`${name}`].message}</span>
    </ErrorMessage>
  };

  return (
    <Container>
      <Image
        src="https://image.freepik.com/vector-gratis/perro-mascota-cara-tazon-rojo-lleno-alimentos_3446-320.jpg"
        alt="img"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Create an account</Title>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          {...register('username', {
          required: "Username is required",
          minLength: {
            value: 6,
            message: "Username must have 6 characters"
          }
        })}
        />
        {showErrorMessage("username")}
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
      <Input
        type="password"
        placeholder="Password"
        name="password"
        {...register('re_password', {
          required: "Password confirmation is required",
          validate: (re_password) => re_password === password_value || "Password not match."
        })}
      />
      {showErrorMessage("re_password")}
      <SignUp>
        Do you have an acount?
        <Link to="/hotdogs_frontend/signin" style={{textDecoration: "underline"}}>Login</Link>
      </SignUp>
      <Buttons>
        <LinkStyled to="/hotdogs_frontend/">Back to home</LinkStyled>
        <Button type="submit">Create account</Button>
      </Buttons>
    </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpMethod: (userInfo) => dispatch(signUpAction(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
