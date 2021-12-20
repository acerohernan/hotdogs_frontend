import React, { useContext } from "react";
import { navigate } from "@reach/router";

import { FaDog as DogIcon } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { BsTrash as DeleteIcon } from "react-icons/bs";
import {
  Container,
  Image,
  Information,
  MainInfo,
  ExtraInfo,
  ButtonContainer,
  Button,
  LinkStyled,
} from "./styles";

import { Context } from "../../Context";

export const Details = () => {
  const { favorites, removeFavorite } = useContext(Context);
  const id = window.location.pathname.replace("/hot-dogs/details/", "");

  const arrDog = favorites.filter((fav) => fav.id === id)[0];
  let dog = {};
  if (arrDog !== undefined) {
    dog = arrDog;
  }
  const { url, name } = dog;

  const handleDeleteFav = () => {
    removeFavorite(dog);
    navigate("/hot-dogs/favs");
  };

  return (
    <Container>
      <Image src={url} />
      <Information>
        <MainInfo>
          <h1>{name}</h1>
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
      </Information>
      <ButtonContainer>
        <LinkStyled to="/hot-dogs/favs">
          <CloseIcon />
        </LinkStyled>
        <Button onClick={handleDeleteFav}>
          <DeleteIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
};
