import React from "react";
import { connect } from "react-redux";

import { UserForm } from "../../components/UserForm";
import { Container, Image } from "./styles";

import { loginSuccessAction, signInAction } from "../../store/actions";

const SingIn = ({ signIn, isAuth, loginSucces }) => {
  return (
    <Container>
      <Image
        src="https://image.freepik.com/vector-gratis/icono-tienda-mascotas-perro_24877-60558.jpg"
        alt="img"
      />
      <UserForm title="SIGN IN" addUserInfo={signIn} logIn={loginSucces} isAuth={isAuth} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (userInfo) => dispatch(signInAction(userInfo)),
  loginSucces: () => dispatch(loginSuccessAction()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
