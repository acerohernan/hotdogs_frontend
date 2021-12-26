//libraries
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//Components
import { HiOutlineLocationMarker as LocationIcon } from "react-icons/hi";
import {
  Container,
  Shadow,
  Name,
  Age,
  NameContainer,
  Distance,
} from "./styles";
import { CardLayout } from "../../components/CardLayout/index";
import { FooterCard } from "../../components/FooterCard";
import { Loader } from "../../components/Loader/index";

//Utils
import { names } from "../../names.json";
import randomNumber from "../../utils/randomNumber";
import { addFavoriteAction, createChatAction } from "../../store/actions";

const Home = ({ isAuth, addFavorite, createChat, favorites }) => {
  const [dogInfo, setDogInfo] = useState({
    name: "",
    id: undefined,
    url: "https://via.placeholder.com/670x700.png?text=Loading",
  });
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    handleChangeCard();
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, []);

  const handleAnimation = (animation) => {
    setAnimation(animation);
    setTimeout(() => {
      setAnimation("");
    }, 1500);
  };

  const handleFavDog = (boolean) => {
    handleChangeCard();
    boolean
      ? handleAnimation("animate__animated animate__zoomOut")
      : handleAnimation("animate__animated animate__fadeOutRight");
  };

  const handleChangeCard = async () => {
    setLoading(true);
    const response = await fetch("https://api.thedogapi.com/v1/images/search");
    const [data] = await response.json();
    const name = names[randomNumber(0, 20)];
    setDogInfo({ ...data, name });
    setLoading(false);
  };

  const { url } = dogInfo;

  const changeDog = () => {
    handleFavDog(false);
  };

  const favDog = () => {
    handleFavDog(true);
    addFavorite(dogInfo);
    createChat(dogInfo);
  };

  return (
    <>
      <CardLayout isAuth={isAuth} favorites={favorites}>
        <Container className={animation}>
          <img src={url} alt="img" />
          {loading ? <Loader /> : null}
          <Shadow />
          <NameContainer>
            <Name>{dogInfo.name}</Name>
            <Age>{randomNumber(5, 80)}</Age>
          </NameContainer>
          <Distance>
            <LocationIcon />
            <span>{`${randomNumber(1, 10)} kilometers away`}</span>
          </Distance>
        </Container>
        <FooterCard changeDog={changeDog} favDog={favDog} />
      </CardLayout>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  favorites: state.favs,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (dog) => dispatch(addFavoriteAction(dog)),
  createChat: (dog) => dispatch(createChatAction(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
