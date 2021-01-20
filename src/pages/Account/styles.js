import styled from "styled-components";
import { Link } from "@reach/router";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #707070;
    margin: 20px 0 90px;
    font-size: 1.5rem;
    @media (min-width: 900px) {
      margin-bottom: 130px;
    }
  }
`;

export const Buttons = styled.div`
  width: 86%;
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Card = styled.div`
  width: 85%;
  max-width: 450px;
  height: 70vh;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  span {
    display: block;
    margin-bottom: 5vh;
  }
  @media (min-width: 700px) {
    height: 380px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 70px;
  z-index: 10;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 1px 2px 12px -4px rgba(0, 0, 0, 0.35);
  :hover {
    box-shadow: none;
  }
`;

export const LinkStyledRed = styled(Link)`
  width: 70px;
  height: 15px;
  padding: 10px 15px;
  background-color: #f05454;
  color: white;
  border-radius: 20px;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 7%;
  font-size: 0.7rem;
  text-align: center;
`;

export const CloseButton = styled.button`
  display: inline-block;
  width: auto;
  height: 35px;
  padding: 10px 15px;
  background-color: #6f9eaf;
  color: white;
  border-radius: 20px;
  align-self: flex-end;
  margin-top: 20px;
  margin-right: 7%;
  font-size: 0.7rem;
  text-align: center;
  border: none;
`;
