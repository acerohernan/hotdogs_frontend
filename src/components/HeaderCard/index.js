import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "@reach/router";

const Header = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 450px;
  padding: 5px 0;
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    height: auto;
    justify-content: space-between;
  }

  li {
    padding: 5px 15px;
    a svg {
      width: 25px;
      height: 25px;
      color: #dde0e6;
    }
  }
  button {
    position: relative;
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 30px;
    color: #dde0e6;
    outline: none;
    display: flex;
    justify-content: space-between;
    padding: 5px;

    ::after {
      content: "";
      display: block;
      background-color: white;
      border-radius: 50%;
      width: 40px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      left: unset;
    }
    svg {
      height: 40px;
      width: 30px;
      align-self: center;
      position: relative;
      z-index: 10;
    }
  }
  .favs::after {
    right: unset;
    left: 0;
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #aeada8;
`;

export const HeaderCard = () => {
  const [showFavs, setShowFavs] = useState(false);

  const handleClick = () => {
    setShowFavs(!showFavs);
  };

  return (
    <>
      <Header>
        <ul>
          <li>
            <a href="#">
              <FaUserAlt />
            </a>
          </li>
          <button className={showFavs ? "favs" : ""} onClick={handleClick}>
            <LinkStyled to={showFavs ? "/favs" : "/home"}>
              <AiFillFire />
              <GiSevenPointedStar />
            </LinkStyled>
          </button>
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
