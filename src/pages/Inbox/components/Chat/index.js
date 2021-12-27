import React, { useState, useEffect } from "react";
import useHash from "../../../../hooks/useHash";
import useElementByHash from "../../../../hooks/useElementByHash";

import { MdSend } from "react-icons/md";
import { Messages } from "../Messages";

import {
  Container,
  MsgHeader,
  Form,
  Input,
  Button,
  Name,
  LastSeen,
} from "./styles";

export function Chat({ favorites, chats, addMessage }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [hash] = useHash();
  const [chat] = useElementByHash(hash, chats);

  useEffect(() => {
    if (hash && chat) setMessages(chat.messages);
  }, [hash, chat]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddMessage = (e) => {
    e.preventDefault();
    addMessage({
      id: chat.id,
      message: inputValue,
    });
    setInputValue("");
  };

  return (
    <Container>
      <MsgHeader>
        {hash && (
          <>
            <Name>{chat ? chat.name : ""}</Name>
            <LastSeen>Last seen 7 minutes ago</LastSeen>
          </>
        )}
      </MsgHeader>
      <Messages hash={hash} messages={messages} favorites={favorites} />
      <Form onSubmit={handleAddMessage}>
        <Input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="You can start a conversation..."
          disabled={!hash}
        />
        <Button disabled={!hash}>
          <MdSend />
        </Button>
      </Form>
    </Container>
  );
}
