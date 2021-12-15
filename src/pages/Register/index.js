import React from "react";

import { UserForm } from "../../components/UserForm";
import { RegisterContainer, Image } from "./styles";

export const Register = () => {
  return (
    <RegisterContainer>
      <Image
        src="https://image.freepik.com/vector-gratis/perro-mascota-cara-tazon-rojo-lleno-alimentos_3446-320.jpg"
        alt="img"
      />
      <UserForm title="SIGN UP" />
    </RegisterContainer>
  );
};
