/** @format */
import styled from "styled-components";

export const Games = styled.figure`
  background-color: black;
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
  height: 78vh;
  background-color: black;
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
