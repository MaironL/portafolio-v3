import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animDiv } from 'globalStyle';

export const Cont = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: auto 250px auto;
  grid-template-rows: 25vh 125px 150px auto;
  justify-items: center;
  align-items: end;
  padding: 0 5px 0 max(20px, 5%);
  color: var(--clr-grey-10);
  height: 100vh;

  @media screen and (max-width: 600px) {
    grid-template-rows: 30vh 250px auto;
  }

  @media screen and (min-width: 600px) and (max-height: 650px) {
    align-items: start;
  }
`;

export const ImgCont = styled.div`
  grid-row: 3/5;
  grid-column: 2/4;
  position: relative;

  @media screen and (min-width: 600px) and (max-height: 650px) {
    display: none;
  }
`;

export const GreetingCont = styled.div`
  background-color: var(--clr-grey-10);
  width: fit-content;
  position: absolute;
  padding: 0.8rem 1.3rem;
  border-radius: 30px;
  top: -5.5rem;
  right: 40%;
  transform: translate(50%, 50%);

  @media screen and (min-width: 600px) {
    right: 30%;
  }
`;

export const Greeting = styled.h4`
  text-transform: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  color: var(--clr-grey-2);
`;

export const Arrow = styled.div`
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 1rem solid var(--clr-grey-10);
  position: absolute;
  top: -1.6rem;
  right: 23%;
  transform: translate(50%, 50%);
`;

export const HomeImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Presentation = styled.div`
  grid-row: 2/4;
  grid-column: 1/3;
  text-align: justify;

  & h1 {
    font-weight: 700;
  }

  & h2 {
    font-size: 1.73rem;
    margin-bottom: 20px;
    font-weight: 400;
    text-align: center;
  }

  & hr {
    border: solid 1px var(--clr-primary-5);
  }

  @media screen and (max-width: 600px) {
    grid-row: 1/3;
  }
`;

export const NamesCont = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const WordCont = styled.div`
  margin-right: 15px;
  min-width: fit-content;
  & span {
    color: var(--clr-primary-5);
    display: inline-block;
    text-transform: none;
    transition: var(--slow-transition);

    &:hover {
      transform: scale(-1, 1);
    }
  }
`;

export const animDivCont = styled(animDiv)``;

export const GoToProjects = styled.button`
  position: relative;
  margin-top: 10px;
  border-radius: 8px;
  border-color: transparent;
  font-weight: 600;
  padding: 5px;
  background-color: var(--clr-primary-5);

  &:hover {
    background-color: var(--clr-primary-6);
    animation-iteration-count: 0;
  }
  &:active {
    box-shadow: 5px 10px 15px var(--clr-primary-4) inset;
  }

  /* animation */
  animation-name: shake;
  animation-iteration-count: infinite;
  animation-duration: 4000ms;

  @keyframes shake {
    0% {
      transform: rotate(-5deg) skewY(-5deg);
    }
    10% {
      transform: rotate(5deg) skewY(5deg);
    }
    20% {
      transform: rotate(-5deg) skewY(-5deg);
    }
    30% {
      transform: rotate(5deg) skewY(5deg);
    }
    40% {
      transform: rotate(-5deg) skewY(-5deg);
    }
    50% {
      transform: rotate(5deg) skewY(5deg);
    }
    60% {
      transform: rotate(-5deg) skewY(-5deg);
    }
    70% {
      transform: rotate(5deg) skewY(5deg);
    }
    80% {
      transform: rotate(-5deg) skewY(-5deg);
    }
    90% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(-5deg) skewY(-5deg);
    }
  }
`;

export const GoToProjectsLink = styled(Link)`
  color: var(--clr-grey-2);
`;
