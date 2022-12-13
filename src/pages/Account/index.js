import React from "react";

import {
  GiSittingDog as FirstNameIcon,
  GiJumpingDog,
  GiBodyHeight,
  GiDogBowl,
} from "react-icons/gi";
import { FaTransgender, FaBirthdayCake } from "react-icons/fa";

import {
  Container,
  Main,
  Username,
  Image,
  Card,
  CloseButton,
  LinkStyledRed,
  Buttons,
} from "./styles";

import { navigate } from "@reach/router";
import { connect } from "react-redux";
import img from "../../assets/static/account.gif";
import { inactivateAuthAction } from "../../store/actions";

const Account = ({ inactivateAuth, userInfo }) => {
  const { username, firstName, age, gender, height, birthday, preferences } =
    userInfo;

  const handleCloseSession = () => {
    inactivateAuth();
    navigate("/signup");
  };

  return (
    <Container>
      <Main>
        <Username>{`@${username ? username : "username"}`}</Username>
        <Image src={img} />
        <Card>
          <span>
            <FirstNameIcon />
            {`First Name: ${firstName}`}
          </span>
          <span>
            <GiJumpingDog />
            {`Age: ${age}`}
          </span>
          <span>
            <FaTransgender />
            {`Gender: ${gender}`}
          </span>
          <span>
            <GiBodyHeight />
            {`Height: ${height}`}
          </span>
          <span>
            <FaBirthdayCake />
            {`Birthday: ${birthday}`}
          </span>
          <span>
            <GiDogBowl />
            {`Preferences: ${preferences}`}
          </span>
        </Card>
      </Main>
      <Buttons>
        <LinkStyledRed to="/">Back to home</LinkStyledRed>
        <CloseButton onClick={handleCloseSession}>Create Account</CloseButton>
      </Buttons>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  inactivateAuth: () => dispatch(inactivateAuthAction()),
});

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
