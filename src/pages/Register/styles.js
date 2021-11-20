import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`;
