import React from "react";
import { Link } from "@reach/router";

import { AiFillFire as FireIcon } from "react-icons/ai";
import { GiSevenPointedStar as StarIcon } from "react-icons/gi";
import { Header, LinkStyled, FavsModal, UserIcon, ChatIcon } from "./styles";

export const HeaderCard = ({ isAuth, favorites }) => {
  const showFavs = window.location.pathname === "/favs";

  return (
    <Header>
      <Link to="/account">
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
      <Link to="/inbox">
        <ChatIcon />
      </Link>
    </Header>
  );
};
