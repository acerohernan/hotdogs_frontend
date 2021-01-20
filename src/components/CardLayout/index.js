import React from "react";

import { HeaderCard } from "../HeaderCard/index";
import { FooterCard } from "../FooterCard/index";

export const CardLayout = ({ children, changeDog, favDog, dogInfo }) => {
  return (
    <>
      <HeaderCard />
      {children}
      <FooterCard changeDog={changeDog} favDog={favDog} dogInfo={dogInfo} />
    </>
  );
};
