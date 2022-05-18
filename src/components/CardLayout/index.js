import React from "react";
import styled from "styled-components";

import { HeaderCard } from "../HeaderCard/index";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto 80px;
  border: 1px solid #d3d3d3;
  max-width: 550px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;

  @media(min-width: 640px){
    height: 95vh;
  }
  `;

export const CardLayout = ({ children, favorites, isAuth }) => {
  return (
    <Container>
      <HeaderCard isAuth={isAuth} favorites={favorites} />
      {children}
    </Container>
  );
};
