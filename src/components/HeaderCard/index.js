import React, { useContext } from "react";
import { Link } from "@reach/router";

import { AiFillFire as FireIcon } from "react-icons/ai";
import { GiSevenPointedStar as StarIcon } from "react-icons/gi";
import { Header, LinkStyled, FavsModal, UserIcon, ChatIcon } from "./styles";

import { Context } from "../../Context";

export const HeaderCard = () => {
  const showFavs = window.location.pathname === "/favs";
  const { favorites, isAuth } = useContext(Context);

  return (
    <Header>
      <Link to={isAuth ? "/account" : "/register"}>
        <UserIcon />
      </Link>
      <LinkStyled
        className={showFavs ? "favs" : ""}
        to={showFavs ? "/" : "/favs"}
      >
        <FireIcon className={showFavs ? "" : "fire"} />
        <StarIcon className={showFavs ? "star" : ""} />
        {favorites.length > 0 && (
          <FavsModal>
            <span>{favorites.length}</span>
          </FavsModal>
        )}
      </LinkStyled>
      <Link to={isAuth ? "/" : "/register"}>
        <ChatIcon />
      </Link>
    </Header>
  );
};
