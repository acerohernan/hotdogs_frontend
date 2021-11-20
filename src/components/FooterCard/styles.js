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
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  outline: none;
  svg {
    width: 25px;
    height: 25px;
  }
  :hover {
    background-color: #f05454;
    color: white;
  }
`;
