import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 95%;
  max-width: 450px;
  height: 387px;
  margin: 10px auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: black;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://cdn2.thedogapi.com/images/ehW1aS16H.jpg");

  @media (min-width: 600px) {
    height: 485px;
  }
`;

const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  filter: blur(20px);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
`;

const Name = styled.span`
  position: relative;
  color: #e7e7de;
  font-size: 2rem;
  font-weight: 500;
  z-index: 10;
`;

const Age = styled.span`
  color: #e7e7de;
  font-size: 1.2rem;
  font-weight: 100;
  position: relative;
  z-index: 10;
  margin-left: 10px;
`;

const NameContainer = styled.div`
  margin: 5px 10px;
  display: flex;
  align-items: center;
`;

const Distance = styled.div`
  margin-left: 10px;
  margin-bottom: 15px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  color: #e7e7de;
  font-weight: 300;
  font-size: 0.9rem;
  span {
    margin-left: 5px;
  }
`;

export const Card = () => {
  return (
    <>
      <Container>
        <Shadow />
        <NameContainer>
          <Name>Jhanvi</Name>
          <Age>19</Age>
        </NameContainer>
        <Distance>
          <HiOutlineLocationMarker />
          <span>11 kilometers away</span>
        </Distance>
      </Container>
    </>
  );
};
