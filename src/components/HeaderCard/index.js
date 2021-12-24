import React from "react";
import { Link } from "@reach/router";

import { AiFillFire as FireIcon } from "react-icons/ai";
import { GiSevenPointedStar as StarIcon } from "react-icons/gi";
import { Header, LinkStyled, FavsModal, UserIcon, ChatIcon } from "./styles";

export const HeaderCard = ({ isAuth, favorites }) => {
  const showFavs = window.location.pathname === "/hot-dogs/favs";

  return (
    <Header>
      <Link to={isAuth ? "/hot-dogs/account" : "/hot-dogs/signup"}>
        <UserIcon />
      </Link>
      <LinkStyled
        className={showFavs ? "favs" : ""}
        to={showFavs ? "/hot-dogs/" : "/hot-dogs/favs"}
      >
        <FireIcon className={showFavs ? "" : "fire"} />
        <StarIcon className={showFavs ? "star" : ""} />
        {favorites.length > 0 && (
          <FavsModal>
            <span>{favorites.length}</span>
          </FavsModal>
        )}
      </LinkStyled>
      <Link to={isAuth ? "/hot-dogs/inbox" : "/hot-dogs/signup"}>
        <ChatIcon />
      </Link>
    </Header>
  );
};
