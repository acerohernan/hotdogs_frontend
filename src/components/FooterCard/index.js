import React, { useContext } from "react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { MdFavorite as FavIcon } from "react-icons/md";

import { Footer, Button } from "./styles";
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
        <Button onClick={changeDog}>
          <CloseIcon />
        </Button>
        <Button onClick={handleFavDog}>
          <FavIcon />
        </Button>
      </Footer>
    </>
  );
};
