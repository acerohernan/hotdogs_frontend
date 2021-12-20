import styled from "styled-components";
import { Link } from "@reach/router";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";

export const Header = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 450px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    padding: 10px 20px;
    box-sizing: border-box;
  }

  svg {
    width: 25px;
    height: 25px;
    transition: 0.3s all ease-in-out;
  }
  .favs::before {
    right: 0;
    left: unset;
  }

  .fire {
    color: #f05454;
  }
  .star {
    color: #74c7b8;
  }
`;

export const LinkStyled = styled(Link)`
  position: relative;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 30px;
  color: #dde0e6;
  outline: none;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #cdd0cb;
  ::before {
    content: "";
    display: block;
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 100%;
    position: absolute;
    top: 0;
    right: unset;
    left: 0;
  }
  svg {
    height: 40px;
    width: 30px;
    align-self: center;
    position: relative;
    z-index: 10;
    transition: 0.3s all ease-in-out;
    :hover {
      transform: scale(125%);
    }
  }
`;

export const FavsModal = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f05454;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  right: 0;
  top: 0;
  z-index: 20;
  opacity: 50%;
  span {
    font-size: 0.7rem;
    color: white;
  }
`;

export const UserIcon = styled(FaUserAlt)`
  color: #cdd0cb;
  :hover {
    color: gray;
  }
`;

export const ChatIcon = styled(BsFillChatFill)`
  color: #cdd0cb;
  :hover {
    color: gray;
  }
`;
