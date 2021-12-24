import React from "react";
import styled from "styled-components";

import img from "../../../../assets/static/hero.png";

const Container = styled.div`
  position: relative;
  ::after {
    content: "";
    display: inline-block;
    width: 8px;
    border-radius: 0 5px 5px 0;
    background-color: black;
    height: 50%;
    position: absolute;
    top: 25%;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const DogImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  position: relative;
`;

export function Dog() {
  return (
    <Container>
      <Link href="#id">
        <DogImg src={img} />
      </Link>
    </Container>
  );
}
