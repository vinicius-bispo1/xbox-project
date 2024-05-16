/** @format */

import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 76vw;
    height: 10vh;

    @media (max-width: 390px) {
      width: 90%;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 35%;
    color: white;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      text-align: right;
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
