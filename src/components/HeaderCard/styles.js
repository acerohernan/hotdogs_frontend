import styled from "styled-components";
import { Link } from "@reach/router";

export const Header = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 450px;
  padding: 5px 0;
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }

  li {
    padding: 5px 15px;
    a svg {
      width: 25px;
      height: 25px;
      color: #dde0e6;
    }
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