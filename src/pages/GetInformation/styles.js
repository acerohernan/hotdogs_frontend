import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  background-color: white;

  @media(min-width: 640px){
    height: 95vh;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  height: 100vh;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: gray;
  }
  input {
    width: 80%;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    padding: 20px 10px;
    font-size: 0.9rem;
    font-weight: 400;
    background-color: #e7e7de;
    :focus {
      outline: none;
      border: none;
    }
  }
  button {
    background-color: #f05454;
    padding: 15px;
    border-radius: 30px;
    width: 140px;
    text-align: center;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin: 40px 0 20px;
  }
`;
