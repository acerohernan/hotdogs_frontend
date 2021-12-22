import React from "react";
import { navigate } from "@reach/router";
import { connect } from "react-redux";

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

import { removeFavoriteAction } from "../../store/actions";

const Details = ({ favorites, removeFavorite }) => {
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
          I am a fun and playful puppy. I like to go for a walk with me owner
          every Thursday. I am looking for a new friend for Thursday walks. 😊
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

const mapStateToProps = (state) => ({
  favorites: state.favs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (dog) => dispatch(removeFavoriteAction(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
