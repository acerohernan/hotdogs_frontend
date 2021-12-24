import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 100vh;
  max-width: 580px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100px 1fr;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export const SideBar = styled.div`
  height: 93%;
  width: 80px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;
