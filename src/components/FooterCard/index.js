import React, { useContext } from "react";
import { Footer } from "./styles";

import {
  AiOutlineReload,
  AiOutlineClose,
  AiFillStar,
  AiFillThunderbolt,
} from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

import { Context } from "../../Context";

export const FooterCard = ({ changeDog, favDog, dogInfo }) => {
  const { favorites, addFavorites } = useContext(Context);

  return (
    <>
      <Footer>
        <button onClick={changeDog}>
          <AiOutlineClose />
        </button>
        <button
          onClick={() => {
            addFavorites(dogInfo);
            favDog();
          }}
        >
          <MdFavorite />
        </button>
      </Footer>
    </>
  );
};
