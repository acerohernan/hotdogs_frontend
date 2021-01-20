import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { navigate } from "@reach/router";

import names from "../../names.json";

import {
  Container,
  Image,
  Information,
  MainInfo,
  ExtraInfo,
  ButtonContainer,
  Button,
} from "./styles";

import { Context } from "../../Context";

export const Details = () => {
  const { favorites } = useContext(Context);
  const id = window.location.pathname.replace("/details/", "");

  const arrDog = favorites.filter((fav) => fav[0].id === id);
  let dog = [];

  if (arrDog !== undefined) {
    const dogInArr = arrDog[0];
    if (dogInArr !== undefined) {
      dog = dogInArr[0];
    }
  }

  const { url } = dog;

  const RandomName = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <Container className="animate__animated animate__fadeInUpBig">
      <Image src={url} />
      <Information>
        <MainInfo>
          <h1>{names.names[RandomName(0, 20)]}</h1>
          <span>17</span>
        </MainInfo>
        <ExtraInfo>Pitbull</ExtraInfo>
        <ExtraInfo>11 km away</ExtraInfo>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          expedita quas repellat tenetur..
        </p>
        <ButtonContainer>
          <Button
            onClick={() => {
              navigate("/favs");
            }}
          >
            <AiOutlineClose />
          </Button>
          <Button>
            <MdFavorite />
          </Button>
        </ButtonContainer>
      </Information>
    </Container>
  );
};
