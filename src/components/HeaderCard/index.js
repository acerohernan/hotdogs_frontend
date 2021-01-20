import React, { useContext, useState } from "react";
import { Link } from "@reach/router";

import { AiFillFire } from "react-icons/ai";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { Header, LinkStyled } from "./styles";

import { Context } from "../../Context";

export const HeaderCard = () => {
  const showFavs = window.location.pathname === "/favs";
  const { userInfo } = useContext(Context);
  return (
    <>
      <Header>
        <ul>
          <li>
            <Link to={`/account`}>
              <FaUserAlt />
            </Link>
          </li>
          <LinkStyled
            className={showFavs ? "favs" : ""}
            to={showFavs ? "/home" : "/favs"}
          >
            <AiFillFire className={showFavs ? "" : "fire"} />
            <GiSevenPointedStar className={showFavs ? "star" : ""} />
          </LinkStyled>
          <li>
            <a href="#">
              <BsFillChatFill />
            </a>
          </li>
        </ul>
      </Header>
    </>
  );
};
