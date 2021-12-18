import React, { useContext } from "react";
import { navigate } from "@reach/router";

import { FaDog as DogIcon } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { MdFavorite as FavoriteIcon } from "react-icons/md";
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
import { names } from "../../names.json";
import randomNumber from "../../utils/randomNumber";

export const Details = () => {
  const { favorites } = useContext(Context);
  const id = window.location.pathname.replace("/details/", "");

  const arrDog = favorites.filter((fav) => fav.id === id)[0];
  let dog = {};
  if (arrDog !== undefined) {
    dog = arrDog;
  }
  const { url } = dog;

  return (
    <Container>
      <Image src={url} />
      <Information>
        <MainInfo>
          <h1>{names[randomNumber(0, 20)]}</h1>
          <span>17</span>
        </MainInfo>
        <ExtraInfo>
          <DogIcon />
          Pitbull
        </ExtraInfo>
        <ExtraInfo>
          <GiDogHouse />
          11 km away
        </ExtraInfo>
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
            <CloseIcon />
          </Button>
          <Button>
            <FavoriteIcon />
          </Button>
        </ButtonContainer>
      </Information>
    </Container>
  );
};
