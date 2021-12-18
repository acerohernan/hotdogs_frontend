import React from "react";
import { LoaderStyled } from "./styles";

export const Loader = () => {
  return (
    <>
      <LoaderStyled className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderStyled>
    </>
  );
};
