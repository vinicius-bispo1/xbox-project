/** @format */
import styled, { css } from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstContainer = styled.section`
  ${center}
  flex-direction: column;
  background-color: #0d100c;
`;
export const BoxInicio = styled.div`
  height: 157vh;
  ${center}
  flex-direction: column;
  justify-content: space-evenly;
  img {
    width: 76.5vw;
     @media (max-width: 390px) {
  }
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
    justify-content: center;
  }
   @media (max-width: 600px) {
    justify-content: space-evenly;
  }
    @media (max-width: 390px) {
    height: 70vh;
    justify-content: center;
  }
`;
export const BoxTitle = styled.div`
  width: 100%;
  height: 18.4vh;
  ${center}
  flex-direction: column;
  justify-content: space-between;
  h1 {
    color: white;
    font-size: 4.5vw;
    @media (max-width: 800px) {
    font-size: 6vw;
    font-weight: 600;
  }
    @media (max-width: 390px) {
    font-size: 10vw;
  }
  }
  h3 {
    color: #9bf00b;
    font-size: 1.5vw;
      @media (max-width: 800px) {
    font-size: 2.3vw;
  }
    @media (max-width: 390px) {
    font-size: 4vw;
  }
  }
  @media (max-width: 800px) {
    justify-content: space-around;
  }
    @media (max-width: 390px) {
    justify-content: space-evenly;
  }
`;
export const BoxControle = styled.section`
  height: 72.9vh;
  width: 76.7vw;
  ${center}
  justify-content: space-between;
  img {
    width: 31.2vw;
     @media (max-width: 390px) {
    width: 50vw;
  }
  }
  @media (max-width: 800px) {
    height: 60vh;
    width: 100%;
    justify-content: space-around;
    gap: 60px;
  }
   @media (max-width: 390px) {
    flex-direction: column;
    gap: 0;
    height: 80vh;
  }
`;

export const Descrição = styled.div`
  width: 35.6vw;
  height: 39.5vh;
  ${center}
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 4vw;
    color: white;
     @media (max-width: 390px) {
    text-align: center;
    width: 100%;
    font-size: 6vw;
  }
  }
  span {
    color: #9bf00b;
  }
  p {
    font-size: 1.5vw;
    color: #C0C0C0;
    line-height: 33px;
    @media (max-width: 800px) {
    line-height: 20px;
    align-items: start;
    width: 31vw;
    font-size: 1.8vw;
  }
    @media (max-width: 390px) {
    width: 100%;
    font-size: 3vw;
    text-align: center;
  }
  }
  @media (max-width: 800px) {
    align-items: start;
    height: 30vh;
  }
    @media (max-width: 390px) {
    height: 25vh;
    width: 65%;
    align-items: center;
  }
`;

export const Games = styled.figure`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  img {
    width: 25%;
  }

  @media (max-width: 800px) {
    justify-content: space-evenly;
    img {
      width: 40%;
    }
  }

  @media (max-width: 390px) {
    img {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

export const Perguntas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  color: white;

  span {
    color: greenyellow;
  }

  @media (max-width: 420px) {
    height: 53vh;
  }
`;

export const Detalhes = styled.div`
  margin-top: 1rem;

  details {
    border-bottom: solid gray 1px;
    height: 8vh;
    width: 76vw;
    display: flex;
    cursor: pointer;
  }

  summary { 
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 420px) {
    font-size: 0.8rem;

    details {
      height: 7vh;
      width: 90vw;
    }
  }
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
`;
