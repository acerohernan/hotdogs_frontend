import styled from "styled-components";

import { Link } from "@reach/router";
import { FaArrowLeft, FaArrowDown } from "react-icons/fa";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-top: 10px;
  }
`;

export const LinkStyled = styled(Link)`
  padding: 10px 20px;
  background-color: #f05454;
  color: white;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 1rem;
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  transition: 0.3s all ease-in-out;
  :hover {
    transform: scale(115%);
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  width: 25px;
  height: 25px;
  margin-top: 20px;
`;

export const ArrowDown = styled(FaArrowDown)`
  width: 25px;
  height: 25px;
  margin-top: 20px;
`;

export const Image = styled.img`
  width: 40%;
`;
