import React from "react";
import { connect } from "react-redux";

import { HeaderCard } from "../../components/HeaderCard/index";
import { Link } from "@reach/router";
import {
  Container,
  FavsContainer,
  Image,
  Icon,
  Modal,
  ModalImage,
  ModalLink,
} from "./styles";

import img from "../../assets/static/favDog.gif";

const Favs = ({ favorites }) => {
  return (
    <Container>
      <HeaderCard favorites={favorites} />
      <Icon />
      <FavsContainer>
        {favorites.map((fav) => {
          const { id, url } = fav;
          return (
            <Link to={`/hot-dogs/details/${id}`} key={id}>
              <Image src={url} />
            </Link>
          );
        })}
        {favorites.length === 0 && (
          <Modal>
            <ModalImage src={img} />
            <span>¡It´s time to get in love!</span>
            <ModalLink to="/hot-dogs/">See dogs</ModalLink>
          </Modal>
        )}
      </FavsContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favs,
});

export default connect(mapStateToProps)(Favs);
