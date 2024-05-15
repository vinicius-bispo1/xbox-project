/** @format */

import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
<<<<<<< HEAD
=======
  background-color: black;

>>>>>>> 2b21e72f751a310201d8fcbfc3fd90f995d407d8
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 76vw;
    height: 10vh;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 35%;
    color: white;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 390px) {
      width: 50%;
      font-size: 0.7rem;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
