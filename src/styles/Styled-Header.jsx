/** @format */

import styled, { createGlobalStyle, css } from "styled-components";

export const Globalstyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Inter", sans-serif;
    background-color: #0D100C;
}
`;
const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #0d100c;
  color: white;
  height: 11.7vh;
  ${center}
    @media (max-width: 390px) {
    height: auto;
  }
`;

export const Container = styled.div`
  /* border: solid 1px yellow; */
  width: 76vw;
  height: 5.2vh;
  padding-left: 32px;
  padding-right: 32px;
  ${center}
  justify-content: space-between;
  a {
    color: #0c0c0c;
    background-color: #9bf00b;
    width: 12.2vw;
    height: 5.2vh;
    ${center}
    font-weight: 700;
    font-size: 0.8vw;
    @media (max-width: 800px) {
    width: 23vw;
    height: 6vh;
    font-size: 1.5vw;
  }
    @media (max-width: 390px) {
    width: 100%;
    font-size: 3vw;
  }
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 7vh;
  }
    @media (max-width: 390px) {
    flex-direction: column;
    height: 25vh;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const BoxMenu = styled.nav`
  /* border: solid 1px red; */
  width: 37.3vw;
  height: 4.3vh;
  ${center}
  justify-content: space-between;
  img{
    width: 7vw;
     @media (max-width: 800px) {
    width: 8vw;
  }
    @media (max-width: 390px) {
    width: 18vw;
  }
  }
  @media (max-width: 800px) {
    width: 60vw;
  }
    @media (max-width: 390px) {
    flex-direction: column;
    height: 11vh;
    width: 100%;
  }
`;
export const Menu = styled.ul`
  /* border: solid 1px white; */
  width: 26.3vw;
  height: 3.9vh;
  ${center}
  justify-content: space-between;
   @media (max-width: 800px) {
    width: 46vw;
  }
    @media (max-width: 390px) {
    width: 100%;
  }
`;
export const Lista = styled.li`
  /* border: solid 1px white; */
  font-weight: 600;
  width: ${(props) => props.largura};
  background-color: ${(props) => props.cor};
  border-radius: 50px;
  font-size: 0.9vw;
  padding: 6px;
  ${center}
  cursor: pointer;
  &:hover {
    background-color: rgba(103, 103, 103, 0.39);
  }
   @media (max-width: 800px) {
    width: 8vw;
    font-size: 1.1vw;
    background-color: ${(props) => props.cor2};
    width: ${(props) => props.larg2};
  }
    @media (max-width: 390px) {
    width: 15vw;
    font-size: 2vw;
    width: ${(props) => props.larg3};
  }
`;
