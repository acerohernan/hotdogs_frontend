import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  Container,
  Shadow,
  Name,
  Age,
  NameContainer,
  Distance,
} from "./styles";

import { CardLayout } from "../../components/CardLayout/index";

import { Loader } from "../../components/Loader/index";

import names from "../../names.json";

const RandomName = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const Home = () => {
  const [dogName, setDogName] = useState("");
  const [dogInfo, setDogInfo] = useState([
    {
      name: dogName,
      id: undefined,
      url: "https://via.placeholder.com/670x700.png?text=Loading",
    },
  ]);
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

  const handleChangeDog = () => {
    handleChangeCard();
    handleAnimation("animate__animated animate__fadeOutRight");
  };

  const handleSaveDog = () => {
    handleChangeCard();
    handleAnimation("animate__animated animate__zoomOut");
  };

  const handleChangeCard = async () => {
    setLoading(true);
    const response = await fetch("https://api.thedogapi.com/v1/images/search");
    const data = await response.json();
    setDogInfo(data);
    setDogName(names.names[RandomName(0, 20)]);
    setLoading(false);
  };

  const [{ url }] = dogInfo;
  return (
    <>
      <CardLayout
        changeDog={handleChangeDog}
        favDog={handleSaveDog}
        dogInfo={dogInfo}
      >
        <Container className={animation}>
          <img src={url} alt="img" />
          {loading ? <Loader /> : null}
          <Shadow />
          <NameContainer>
            <Name>{dogName}</Name>
            <Age>{RandomName(5, 80)}</Age>
          </NameContainer>
          <Distance>
            <HiOutlineLocationMarker />
            <span>{`${RandomName(1, 10)} kilometers away`}</span>
          </Distance>
        </Container>
      </CardLayout>
    </>
  );
};
