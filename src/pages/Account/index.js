import React, { useContext } from "react";

import {
  GiSittingDog as FirstNameIcon,
  GiJumpingDog,
  GiBodyHeight,
  GiDogBowl,
} from "react-icons/gi";
import { FaTransgender, FaBirthdayCake } from "react-icons/fa";

import {
  Container,
  Username,
  Image,
  Card,
  CloseButton,
  LinkStyledRed,
  Buttons,
} from "./styles";

import { Context } from "../../Context";

export const Account = () => {
  const { userInfo, inactivateAuth } = useContext(Context);
  const { username, firstName, age, gender, height, birthday, preferences } =
    userInfo;

  return (
    <Container>
      <Username>{`@${username}`}</Username>
      <Image src="https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png" />
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
      <Buttons>
        <LinkStyledRed to="/">Back to home</LinkStyledRed>
        <CloseButton
          onClick={() => {
            inactivateAuth();
          }}
        >
          Close Session
        </CloseButton>
      </Buttons>
    </Container>
  );
};
