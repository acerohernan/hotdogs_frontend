import React from "react";
import styled from "styled-components";

import { HeaderCard } from "../HeaderCard/index";
import { FooterCard } from "../FooterCard/index";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto 80px;
`;

export const CardLayout = ({ children, changeDog, favDog, dogInfo }) => {
  return (
    <Container>
      <HeaderCard />
      {children}
      <FooterCard changeDog={changeDog} favDog={favDog} dogInfo={dogInfo} />
    </Container>
  );
};
