import React, { useContext } from "react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { MdFavorite as FavIcon } from "react-icons/md";

import { Footer, CloseButton, FavButton } from "./styles";
import { Context } from "../../Context";

export const FooterCard = ({ changeDog, favDog, dogInfo }) => {
  const { addFavorites } = useContext(Context);

  const handleFavDog = () => {
    addFavorites(dogInfo);
    favDog();
  };

  return (
    <>
      <Footer>
        <CloseButton onClick={changeDog}>
          <CloseIcon />
        </CloseButton>
        <FavButton onClick={handleFavDog}>
          <FavIcon />
        </FavButton>
      </Footer>
    </>
  );
};
