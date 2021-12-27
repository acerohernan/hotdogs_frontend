import styled from "styled-components";

export const Footer = styled.footer`
  background-color: white;
  padding: 10px 0;
  margin: 0 auto;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    outline: none;
    background-color: white;
    transition: 0.2s all ease-in-out;
    box-shadow: 5px 4px 27px -8px rgba(0, 0, 0, 0.3);
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const CloseButton = styled.button`
  color: #6f9eaf;
  :hover {
    transform: scale(110%);
    background-color: #6f9eaf;
    color: white;
  }
`;

export const FavButton = styled.button`
  color: #f05454;
  :hover {
    transform: scale(110%);
    background-color: #f05454;
    color: white;
  }
`;
