import React from "react";
import { connect } from "react-redux";

import { UserForm } from "../../components/UserForm";
import { Container, Image } from "./styles";

import { signInAction } from "../../store/actions";

const SingIn = ({ signIn }) => {
  return (
    <Container>
      <Image
        src="https://image.freepik.com/vector-gratis/icono-tienda-mascotas-perro_24877-60558.jpg"
        alt="img"
      />
      <UserForm title="SIGN IN" addUserInfo={signIn} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (userInfo) => dispatch(signInAction(userInfo)),
});

export default connect(null, mapDispatchToProps)(SingIn);
