import React from "react";
import styled from "styled-components";

import {
  AiOutlineReload,
  AiOutlineClose,
  AiFillStar,
  AiFillThunderbolt,
} from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

const Footer = styled.footer`
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
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const FooterCard = () => {
  return (
    <>
      <Footer>
        <button>
          <AiOutlineReload />
        </button>
        <button>
          <AiOutlineClose />
        </button>
        <button>
          <AiFillStar />
        </button>
        <button>
          <MdFavorite />
        </button>
        <button>
          <AiFillThunderbolt />
        </button>
      </Footer>
    </>
  );
};
