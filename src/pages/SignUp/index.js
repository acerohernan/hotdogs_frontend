import React from "react";
import { connect } from "react-redux";

import { UserForm } from "../../components/UserForm";
import { Container, Image } from "./styles";

import { signUpAction } from "../../store/actions";

const SignUp = ({ signUpMethod }) => {
  return (
    <Container>
      <Image
        src="https://image.freepik.com/vector-gratis/perro-mascota-cara-tazon-rojo-lleno-alimentos_3446-320.jpg"
        alt="img"
      />
      <UserForm title="SIGN UP" signup addUserInfo={signUpMethod} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpMethod: (userInfo) => dispatch(signUpAction(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);
