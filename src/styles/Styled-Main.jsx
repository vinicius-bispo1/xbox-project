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
  }
`;
export const BoxTitle = styled.div`
  width: 100%;
  height: 18.4vh;
  ${center}
  flex-direction: column;
  h1 {
    color: white;
    font-size: 4.5vw;
  }
  h3 {
    color: #9bf00b;
    font-size: 1.5vw;
  }
`;
export const BoxControle = styled.section`
  height: 72.9vh;
  width: 76.7vw;
  ${center}
  justify-content: space-between;
  img {
    width: 31.2vw;
  }
`;

export const Descrição = styled.div`
  width: 35.6vw;

  h2 {
    font-size: 4vw;
    color: white;
  }
  span {
    color: #9bf00b;
  }
  p {
    font-size: 1.5vw;
    color: white;
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
