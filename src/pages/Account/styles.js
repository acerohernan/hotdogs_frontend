import styled from "styled-components";
import { Link } from "@reach/router";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  max-width: 600px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Username = styled.h1`
  color: #707070;
  margin: 20px 0;
  font-size: 1.5rem;
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 100%;
  margin-bottom: 20px;
  box-shadow: 1px 2px 12px -4px rgba(0, 0, 0, 0.35);
  :hover {
    box-shadow: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  span {
    display: flex;
    align-items: center;
    margin: 10px 0;
    svg {
      margin: 0 5px;
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const LinkStyledRed = styled(Link)`
  background-color: #f05454;
  color: white;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: 0.3s all ease-in-out;
  :hover {
    transform: scale(115%);
  }
`;

export const CloseButton = styled.button`
  background-color: #6f9eaf;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  outline: none;
  color: white;
  font-size: 0.9rem;
  transition: 0.3s all ease-in-out;
  :hover {
    transform: scale(115%);
  }
`;
