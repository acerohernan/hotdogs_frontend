import React from "react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { MdFavorite as FavIcon } from "react-icons/md";

import { Footer, CloseButton, FavButton } from "./styles";

export const FooterCard = ({ changeDog, favDog }) => {
  return (
    <>
      <Footer>
        <CloseButton onClick={changeDog}>
          <CloseIcon />
        </CloseButton>
        <FavButton onClick={favDog}>
          <FavIcon />
        </FavButton>
      </Footer>
    </>
  );
};
