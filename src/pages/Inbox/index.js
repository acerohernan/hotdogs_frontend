import React from "react";
import { connect } from "react-redux";

import { Dog } from "./components/Dog";
import { Chat } from "./components/Chat";
import { CardLayout } from "../../components/CardLayout";

import { Container, SideBar } from "./styles";
import { addMessageAction } from "../../store/actions";

function Inbox({ favorites, chats, addMessage }) {
  return (
    <CardLayout favorites={favorites}>
      <Container>
        <SideBar>
          {favorites.map((dog, index) => (
            <Dog key={index} {...dog} />
          ))}
        </SideBar>
        <Chat chats={chats} addMessage={addMessage} favorites={favorites} />
      </Container>
    </CardLayout>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favs,
  chats: state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (msg) => dispatch(addMessageAction(msg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
