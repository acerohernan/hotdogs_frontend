import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 12px -4px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
    height: 140vh;
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
    max-width: 350px;
    width: 80%;
    height: 40px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
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
  @media (min-width: 900px) {
    height: 650px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    h1 {
      font-size: 2rem;
      margin: 10px 0 10px;
    }
    input {
      height: 60px;
      width: 80%;
      font-size: 0.9rem;
    }
    button {
      margin-top: 25px;
      height: 70px;
      width: 140px;
      font-size: 0.9rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;
