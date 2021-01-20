import React, { useContext } from "react";

import { Context } from "../../Context";

import {
  Container,
  Image,
  Card,
  CloseButton,
  LinkStyledRed,
  Buttons,
} from "./styles";

export const Account = () => {
  const { userInfo, inactivateAuth } = useContext(Context);
  const { username, accountInfo } = userInfo;
  const { firstName, age, gender, height, birthday, preferences } = accountInfo;
  return (
    <Container>
      <h1>{`@${username}`}</h1>
      <Image src="https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png" />
      <Card>
        <span>{`First Name: ${firstName}`}</span>
        <span>{`Age: ${age}`}</span>
        <span>{`Gender: ${gender}`}</span>
        <span>{`Height: ${height}`}</span>
        <span>{`Birthday: ${birthday}`}</span>
        <span>{`Preferences: ${preferences}`}</span>
      </Card>
      <Buttons>
        <LinkStyledRed to="/home">Back to home</LinkStyledRed>
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
