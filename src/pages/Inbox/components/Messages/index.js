import React from "react";
import { Modal } from "../Modal";

import { Container, Message } from "./styles";

export function Messages({ messages, hash, favorites }) {
  return (
    <Container>
      {messages &&
        hash &&
        messages.map((msg, index) => (
          <Message key={index}>
            <span>{msg}</span>
          </Message>
        ))}
      <Modal favorites={favorites} hash={hash} messages={messages} />
    </Container>
  );
}
