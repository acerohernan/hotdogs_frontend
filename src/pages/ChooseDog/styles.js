import styled from 'styled-components';
import { Link } from '@reach/router';

export const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    max-width: 550px;
    border: 1px solid #d3d3d3;
    margin: auto;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;

  @media(min-width: 640px){
    height: 95vh;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  text-align: center;
  margin-top: 20px;
  font-weight: 200;
`;

export const CreateDog = styled.div`
  height: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-top: 10px;
  }
`;

export const LinkStyled = styled(Link)`
  padding: 10px 20px;
  background-color: #f05454;
  color: white;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 1rem;
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  transition: 0.3s all ease-in-out;
  :hover {
    transform: scale(115%);
  }
`;

export const Image = styled.img`
  width: 40%;
`;

export const DogContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
    gap: 20px;

    @media (min-width: 540px){
        grid-template-columns: 1fr 1fr 1fr;
    };
`;

export const Dog = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 140px;
    margin: auto;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 5px;
    }
    span{
        display: block;
    }
`;

export const CreateLink = styled(Link)`
    background-color: #f05454;
    color: white;
    border-radius: 15px;
    padding: 10px 20px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
    left: 20px;
    text-align: center;

    @media (min-width: 640px){
        bottom: 20px;
    }
`;