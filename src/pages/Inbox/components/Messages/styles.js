import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`;
export const Message = styled.div`
  width: 100%;
  height: auto;
  margin: 5px 0;
  display: flex;
  justify-content: flex-end;
  span {
    background-color: blue;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    color: white;
  }
`;
