import React from "react";
import { Container, LinkStyled, ArrowLeft, ArrowDown, Image } from "./styles";

import img from "../../../../assets/static/inLove.gif";

export function Modal({ favorites, hash, messages }) {
  return (
    <Container>
      {favorites.length === 0 && (
        <>
          <Image src={img} />
          <span>You need to have a match to start a conversation</span>
          <LinkStyled to="/">See dogs</LinkStyled>
        </>
      )}
      {favorites.length >= 1 && !hash && (
        <>
          <Image src={img} />
          <span>Click an image on the sidebar to start a conversation</span>
          <ArrowLeft />
        </>
      )}
      {messages && messages.length === 0 && hash && (
        <>
          <Image src={img} />
          <span>Say somethig nice to start the conversation</span>
          <ArrowDown />
        </>
      )}
    </Container>
  );
}
