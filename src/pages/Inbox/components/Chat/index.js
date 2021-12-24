import React from "react";

import { MdSend } from "react-icons/md";

import {
  Container,
  MsgHeader,
  Messages,
  InputContainer,
  Input,
  Button,
} from "./styles";

export function Chat() {
  return (
    <Container>
      <MsgHeader>
        <span>Ramiro</span>
      </MsgHeader>
      <Messages></Messages>
      <InputContainer>
        <Input type="text" />
        <Button>
          <MdSend />
        </Button>
      </InputContainer>
    </Container>
  );
}
