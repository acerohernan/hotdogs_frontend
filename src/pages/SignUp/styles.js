import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  max-width: 550px;
  box-sizing: border-box;
  background-color: white;

  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
  }

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
