import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  position: relative;
  margin: 0 auto;
  max-width: 450px;
  height: 377px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 600px) {
    height: 475px;
  }
`;

const Image = styled.img`
  width: 30%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const Favs = () => {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((fav) => {
        return (
          <Image
            key={fav}
            src="https://cdn2.thedogapi.com/images/BJ2Wq664X.gif"
          />
        );
      })}
    </Container>
  );
};
