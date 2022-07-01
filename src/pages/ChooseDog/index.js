import React, {useEffect, useState} from 'react'

import img from "../../assets/static/inLove.gif";
import {Container, Title, CreateDog, Image, LinkStyled, DogContainer, Dog, CreateLink} from "./styles";

import API from "../../api";
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { selectDogAction } from '../../store/actions';
import { useNavigate } from '@reach/router';

const src = "https://cdn-icons-png.flaticon.com/512/3636/3636172.png";

function ChooseDog({selectDog}) {
  const [dog, setDogs] = useState([]);
  const [loading, setLoading] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUserDogs();
  }, [])

  const getAllUserDogs = async() => {
    setLoading(true);
    try{
      const response = await API.dog.getAll();
      setDogs(response.data.data);
      setLoading(false);
    }catch(e){
      console.log(e);
      toast.error("Could not get the dogs.");
      setLoading(false);
    };
  };

  const handleSelectDog = (dog) => () =>{
    selectDog(dog);
    localStorage.setItem("selectedDog", JSON.stringify(dog));
    toast.success(`${dog.first_name} was selected.`);
    navigate('/hotdogs_frontend/');
  };
  return (
    <Container>
        {
          dog.length >= 1 && (
            <>
              <Title>Select a dog to continue</Title>
              <DogContainer>
                {
                  dog.map((dog, index) => (
                    <Dog onClick={handleSelectDog(dog)} key={index}>
                      <img src={src}/>
                      <span>{dog.first_name}</span>
                    </Dog>
                  ))
                }
              </DogContainer>
              <CreateLink to="/hotdogs_frontend/information">Create dog</CreateLink>
            </>
          )
        }
        {
          dog.length === 0 && (
            <CreateDog>
              <Image src={img} />
              <span>Oh! Seems that you not have a dog. Please create one to continue</span>
              <LinkStyled to="/hotdogs_frontend/information">Create dog</LinkStyled>
            </CreateDog>
          )
        }
    </Container>
  )
};

const mapStateToProps = (state) => ({
  selectedDog: state.dog
});

const mapDispatchToProps = (dispatch) => ({
  selectDog: (dog) => dispatch(selectDogAction(dog))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDog);