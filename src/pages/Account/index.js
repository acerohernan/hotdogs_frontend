import React, { useState } from "react";
import moment from "moment";

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
  ModalContainer,
  ButtonRed,
} from "./styles";

import { navigate } from "@reach/router";
import { connect } from "react-redux";
import img from "../../assets/static/account.gif";
import { deleteDogAction, inactivateAuthAction, logoutAction } from "../../store/actions";
import toast from "react-hot-toast";
import API from "../../api";

const Account = ({ inactivateAuth, userInfo, selectedDog, isAuth, isSelected, deleteDog, logout }) => {
  const [loading, setLoading] = useState(false);
  const { first_name, age, gender, height, birthday_date, preferences } =
    selectedDog;


  const handleCloseSession = async() => {
    setLoading(true);
    try{
      await API.auth.logout();
      localStorage.removeItem("selectedDog");
      deleteDog();
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      logout();
      toast.success("The session is closed successfully.");
      setLoading(false);
      navigate('/hot-dogs');
    }catch(err){
      toast.error(err.response?.data?.message || "An error was ocurred");
      setLoading(false);
    };
  };

  const handleChangeDog = () => {
    localStorage.removeItem("selectedDog");
    deleteDog();
    navigate('/hot-dogs/choose');
  };

  if(!isSelected){
    return (
      <ModalContainer>
        <img src={img} alt="Dog Account" />
        <span>Please select a dog to see the information</span>
        <div>
        <LinkStyledRed to="/hot-dogs/">Back to home</LinkStyledRed>
         <CloseButton onClick={() => navigate('/hot-dogs/signup')}>Create account</CloseButton>
        </div>
      </ModalContainer>
    )
  }

  return (
    <Container>
      <Main>
        <Username>{`@${first_name.toLocaleLowerCase().trim()}`}</Username>
        <Image src={img} />
        <Card>
          <span>
            <FirstNameIcon />
            {`First Name: ${first_name}`}
          </span>
          <span>
            <GiJumpingDog />
            {`Age: ${age}`}
          </span>
          <span>
            <FaTransgender />
            {`Gender: ${gender? "Female" : "Male"}`}
          </span>
          <span>
            <GiBodyHeight />
            {`Height: ${height}`}
          </span>
          <span>
            <FaBirthdayCake />
            {`Birthday: ${moment(birthday_date).format('MMMM Do YYYY')}`}
          </span>
          <span>
            <GiDogBowl />
            {`Preferences: ${preferences}`}
          </span>
        </Card>
      </Main>
      <Buttons>
        <LinkStyledRed to="/hot-dogs/">Back to home</LinkStyledRed>
        <CloseButton onClick={handleChangeDog}>Change Dog</CloseButton>
        <ButtonRed onClick={handleCloseSession}>Close session</ButtonRed>
      </Buttons>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
  deleteDog: () => dispatch(deleteDogAction()),
});

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
  selectedDog: state.dog,
  isAuth: state.user.isAuth,
  isSelected: state.dog.selected
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
