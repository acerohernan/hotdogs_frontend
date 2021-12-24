import React from "react";
import { Container, SideBar } from "./styles";

import { connect } from "react-redux";

import { Dog } from "./components/Dog";
import { Chat } from "./components/Chat";
import { CardLayout } from "../../components/CardLayout";

function Inbox({ favorites }) {
  return (
    <CardLayout favorites={favorites}>
      <Container>
        <SideBar>
          {[1, 2, 3, 4, 5, 6].map((dog, index) => (
            <Dog key={index} />
          ))}
        </SideBar>
        <Chat />
      </Container>
    </CardLayout>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favs,
});
export default connect(mapStateToProps)(Inbox);
