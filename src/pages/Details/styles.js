import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 487px;
  margin: 0 auto;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media (min-width: 600px) {
    height: 300px;
  }
`;

export const Information = styled.div`
  width: 100%;
  height: 51%;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  overflow: hidden;
  p {
    margin-top: 15px;
    margin-left: 10px;
    color: #00303f;
    @media (min-width: 600px) {
      margin-top: 30px;
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0 10px 10px;
  h1 {
    font-size: 2.5rem;
    color: #222831;
  }
  span {
    padding-top: 5px;
    font-size: 2rem;
    margin-left: 10px;
  }
`;

export const ExtraInfo = styled.span`
  margin-left: 10px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  width: 200px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  @media (min-width: 600px) {
    margin-top: 60px;
  }
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  outline: none;
  svg {
    width: 25px;
    height: 25px;
  }
`;
