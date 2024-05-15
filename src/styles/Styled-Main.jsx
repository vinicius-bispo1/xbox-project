/** @format */
import styled, { css } from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstContainer = styled.section`
border: solid 1px red;
${center}
flex-direction: column;
background-color: #0D100C;

`
export const BoxInicio = styled.div`
height: 157vh;
border: solid 1px red;
${center}
flex-direction: column;
justify-content: space-evenly;
img{
  border: solid 1px yellow;
  width: 76.5vw;
}
`
export const BoxTitle= styled.div`
border: solid 1px red;
width: 100%;
height: 18.4vh;
${center}
flex-direction: column;
h1{
color: white;
font-size: 4.5vw;
}
h3{
  color: #9BF00B;
  font-size: 1.5vw;
}
`
export const BoxControle = styled.section`
height: 72.9vh;
width: 76.7vw;
border: solid 1px green;
`

export const Games = styled.figure`
  img {
    width: 25%;
  }
`;

export const Perguntas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background-color: black;
  color: white;

  span {
    color: greenyellow;
  }
`;

export const Detalhes = styled.div`
  details {
    border-bottom: solid gray 1px;
  }
`;
