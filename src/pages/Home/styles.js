import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 95%;
  max-width: 580px;
  margin: 10px auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 10px;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    margin: 0 auto;
  }
`;
export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  filter: blur(20px);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
`;
export const Name = styled.span`
  position: relative;
  color: #e7e7de;
  font-size: 2rem;
  font-weight: 500;
  z-index: 10;
`;
export const Age = styled.span`
  color: #e7e7de;
  font-size: 1.2rem;
  font-weight: 100;
  position: relative;
  z-index: 10;
  margin-left: 10px;
`;
export const NameContainer = styled.div`
  margin: 5px 10px;
  display: flex;
  align-items: center;
`;
export const Distance = styled.div`
  margin-left: 10px;
  margin-bottom: 15px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  color: #e7e7de;
  font-weight: 300;
  font-size: 0.9rem;
  span {
    margin-left: 5px;
  }
`;
