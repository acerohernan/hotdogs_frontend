import React from "react";
import useHash from "../../../../hooks/useHash";
import useElementByHash from "../../../../hooks/useElementByHash";

import { MdSend } from "react-icons/md";

import {
  Container,
  MsgHeader,
  Messages,
  InputContainer,
  Input,
  Button,
  Name,
  LastSeen,
  MsgSended,
  MsgReceived,
} from "./styles";

export function Chat({ chats, addMessage }) {
  const [hash] = useHash();
  const [chat] = useElementByHash(hash, chats);

  const handleAddMessage = () => {
    addMessage();
  };

  return (
    <Container>
      <MsgHeader>
        <Name>{chat ? chat.name : ""}</Name>
        <LastSeen>Last seen 7 minutes ago</LastSeen>
      </MsgHeader>
      <Messages>
        {chats.lenght > 0 &&
          chat.messages.map((msg) => {
            if (!msg.sended)
              return (
                <MsgReceived>
                  <span>{msg.text}</span>
                </MsgReceived>
              );

            return (
              <MsgSended>
                <span>{msg.text}</span>
              </MsgSended>
            );
          })}
      </Messages>
      <InputContainer>
        <Input type="text" />
        <Button>
          <MdSend />
        </Button>
      </InputContainer>
    </Container>
  );
}
