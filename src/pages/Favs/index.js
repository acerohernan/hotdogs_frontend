import React, { useContext } from "react";

import { Context } from "../../Context";
import { HeaderCard } from "../../components/HeaderCard/index";
import { Link } from "@reach/router";
import { Container, FavsContainer, Image, Icon } from "./styles";

export const Favs = () => {
  const { favorites } = useContext(Context);

  return (
    <Container>
      <HeaderCard />
      <Icon />
      <FavsContainer>
        {favorites.map((fav) => {
          const { id, url } = fav;
          return (
            <Link to={`/details/${id}`} key={id}>
              <Image src={url} />
            </Link>
          );
        })}
      </FavsContainer>
    </Container>
  );
};
