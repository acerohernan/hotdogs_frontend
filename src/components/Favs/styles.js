import styled from "styled-components";
import MatchIcon from "../../assets/static/MatchIcon";

export const Container = styled.div`
  padding: 15px;
  position: relative;
  margin: 0 auto;
  max-width: 450px;
  height: 377px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 600px) {
    height: auto;
  }
`;

export const Image = styled.img`
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  transition: 0.5 all ease-in-out;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    transform: scale(110%);
  }
`;

export const Icon = styled(MatchIcon)`
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: -5px;
`;
