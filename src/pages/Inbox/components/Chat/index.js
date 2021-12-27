import React, { useState, useEffect } from "react";
import useHash from "../../../../hooks/useHash";
import useElementByHash from "../../../../hooks/useElementByHash";

import { MdSend } from "react-icons/md";

import {
  Container,
  MsgHeader,
  Messages,
  Form,
  Input,
  Button,
  Name,
  LastSeen,
  Message,
} from "./styles";

export function Chat({ chats, addMessage }) {
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
        {chats.length > 0 ? (
          <>
            <Name>{chat ? chat.name : ""}</Name>
            <LastSeen>Last seen 7 minutes ago</LastSeen>
          </>
        ) : null}
      </MsgHeader>
      <Messages>
        {messages &&
          messages.map((msg, index) => (
            <Message key={index}>
              <span>{msg}</span>
            </Message>
          ))}
      </Messages>
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
