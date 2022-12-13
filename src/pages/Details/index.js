import React from "react";
import { navigate } from "@reach/router";
import { connect } from "react-redux";

import { FaDog as DogIcon } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import {
  AiOutlineHome as HomeIcon,
  AiOutlineMessage as MessageIcon,
} from "react-icons/ai";
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

import { removeFavoriteAction, removeChatAction } from "../../store/actions";

const Details = ({ favorites, removeFavorite, removeChat }) => {
  const id = window.location.pathname.replace("/details/", "");

  const arrDog = favorites.filter((fav) => fav.id === id)[0];
  let dog = {};
  if (arrDog !== undefined) {
    dog = arrDog;
  }
  const { url, name } = dog;

  const handleDeleteFav = () => {
    removeFavorite(dog);
    removeChat(dog);
    navigate("/favs");
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
        <LinkStyled to="/favs">
          <HomeIcon />
        </LinkStyled>
        <LinkStyled to={`/inbox#${id}`}>
          <MessageIcon />
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
  removeChat: (dog) => dispatch(removeChatAction(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
