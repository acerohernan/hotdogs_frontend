import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 93%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 50px;
  gap: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 50px;
  gap: 10px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #dedede;
  padding: 5px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 1rem;
  :focus {
    outline: 2px solid #dedede;
  }
`;

export const Button = styled.button`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  border: 1px solid #dedede;
  background-color: transparent;
  :hover {
    background-color: #dedede;
  }
`;

export const MsgHeader = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #dedede;
  box-sizing: border-box;
  padding: 5px 10px;
`;

export const Name = styled.span`
  display: block;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1.6rem;
  align-self: center;
  font-family: "Roboto", sans-serif;
`;

export const LastSeen = styled.span`
  color: #808080;
  font-size: 0.8rem;
`;
