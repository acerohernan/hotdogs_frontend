import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  ::after {
    content: "";
    display: ${(props) => (props.selected ? "display-block" : "none")};
    width: 8px;
    border-radius: 0 5px 5px 0;
    background-color: black;
    height: 50%;
    position: absolute;
    top: 25%;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const DogImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  position: relative;
`;
