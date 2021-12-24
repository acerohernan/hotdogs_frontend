import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 93%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 50px;
  gap: 20px;
`;

export const InputContainer = styled.div`
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

export const Messages = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #dedede;
  border: 1px solid #dedede;
  border-radius: 5px;
`;
export const MsgHeader = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #dedede;
  padding: 10px 0;
  span {
    display: block;
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-weight: 300;
    font-size: 1.7rem;
    align-self: center;
    font-family: "Roboto", sans-serif;
  }
`;
