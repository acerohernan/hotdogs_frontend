import React from "react";

import { UserForm } from "../../components/UserForm";
import { Container, Image } from "./styles";

export const SingIn = () => {
  return (
    <Container>
      <Image
        src="https://image.freepik.com/vector-gratis/icono-tienda-mascotas-perro_24877-60558.jpg"
        alt="img"
      />
      <UserForm title="SIGN IN" />
    </Container>
  );
};
