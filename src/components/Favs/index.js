import React, { useContext } from "react";

import { Context } from "../../Context";
import { HeaderCard } from "../HeaderCard/index";
import { Link } from "@reach/router";
import { Container, Image, Icon } from "./styles";

export const Favs = () => {
  const { favorites } = useContext(Context);

  return (
    <>
      <HeaderCard />
      <Icon />
      <Container>
        {favorites.map((fav) => {
          console.log(favorites);
          const { id, url } = fav[0];
          return (
            <Link to={`/details/${id}`} key={id}>
              <Image src={url} />
            </Link>
          );
        })}
      </Container>
    </>
  );
};
