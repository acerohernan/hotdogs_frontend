import styled from "styled-components";
import MatchIcon from "../../assets/static/MatchIcon";
import { Link } from "@reach/router";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 75px 1fr;
`;

export const FavsContainer = styled.div`
  padding: 15px;
  position: relative;
  max-width: 580px;
  border-radius: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 600px) {
    height: auto;
  }
`;

export const Image = styled.img`
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  transition: 0.5 all ease-in-out;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    transform: scale(110%);
  }
`;

export const Icon = styled(MatchIcon)`
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: -5px;
`;

export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 10px;
  }
`;

export const ModalImage = styled.img`
  width: 40%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ModalLink = styled(Link)`
  margin-top: 10px;
  background-color: #f05454;
  padding: 10px 20px;
  border-radius: 15px;
  color: white;
  margin-top: 20px;
`;
