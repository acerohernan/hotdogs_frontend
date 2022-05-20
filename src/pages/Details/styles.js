import styled from "styled-components";
import { Link } from "@reach/router";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 550px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr 80px;
  background-color: white;

  @media(min-width: 640px){
    height: 95vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  p {
    margin-top: 15px;
    margin-left: 10px;
    color: #00303f;
    @media (min-width: 600px) {
      margin-top: 30px;
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0 10px 10px;
  h1 {
    font-size: 2.5rem;
    color: #222831;
  }
  span {
    padding-top: 5px;
    font-size: 2rem;
    margin-left: 10px;
  }
`;

export const ExtraInfo = styled.span`
  margin-left: 10px;
  margin-top: 5px;
  svg {
    margin: 0 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 5px;

  cursor: pointer;
  outline: none;
  transition: 0.3s all ease-in-out;
  :hover {
    transform: scale(125%);
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const LinkStyled = styled(Link)`
  width: 50px;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  border-radius: 50%;
  transition: 0.3s all ease-in-out;
  margin-right: 20px;
  :hover {
    transform: scale(125%);
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;
