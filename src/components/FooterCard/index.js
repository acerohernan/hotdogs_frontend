import React, { useContext } from "react";
import { Footer } from "./styles";

import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { MdFavorite as FavIcon } from "react-icons/md";

import { Context } from "../../Context";

export const FooterCard = ({ changeDog, favDog, dogInfo }) => {
  const { addFavorites } = useContext(Context);

  return (
    <>
      <Footer>
        <button onClick={changeDog}>
          <CloseIcon />
        </button>
        <button
          onClick={() => {
            addFavorites(dogInfo);
            favDog();
          }}
        >
          <FavIcon />
        </button>
      </Footer>
    </>
  );
};
