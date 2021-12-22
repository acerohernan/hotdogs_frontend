import React from "react";
import { connect } from "react-redux";

import { HeaderCard } from "../../components/HeaderCard/index";
import { Link } from "@reach/router";
import { Container, FavsContainer, Image, Icon } from "./styles";

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
      </FavsContainer>
      {favorites.lenght < 1 && <h3>Let´s checks some dogs</h3>}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favs,
});

export default connect(mapStateToProps)(Favs);
