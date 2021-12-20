import { Link } from "@reach/router";
import styled from "styled-components";

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
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: gray;
`;

export const Input = styled.input`
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
`;

export const SignUp = styled.span`
  font-size: 0.9rem;
  margin-top: 15px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 40px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  background-color: #f05454;
  border: none;
  color: white;
  font-weight: 400;
  border-radius: 30px;
  font-size: 1rem;
  height: 100%;
`;

export const LinkStyled = styled(Link)`
  padding: 10px 30px;
  background-color: #6f9eaf;
  border: none;
  color: white;
  font-weight: 400;
  border-radius: 30px;
  font-size: 1rem;
`;
