import React from "react";
import { UserForm } from "../../components/UserForm";
import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 12px -4px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
  }
`;

const Image = styled.img`
  margin: 0 auto;
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`;

export const Register = () => {
  return (
    <RegisterContainer>
      <Image
        src="https://image.freepik.com/vector-gratis/perro-mascota-cara-tazon-rojo-lleno-alimentos_3446-320.jpg"
        alt="img"
      />
      <UserForm title="REGISTER" footerMsg="Do you have an account?" register />
    </RegisterContainer>
  );
};
