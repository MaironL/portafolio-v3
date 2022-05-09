import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;

  @media screen and (min-width: 600px) {
    margin-left: 8%;
    padding: 0;
  }
`;
export const Presentation = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #a9a9a9;
  width: 90%;

  & span {
    margin-right: 10px;
    display: inline-block;
    animation: hi 1s both infinite;
    @keyframes hi {
      0% {
        transform: rotate(0deg) translate(0px, 0px);
      }

      50% {
        transform: rotate(60deg) translate(6px, -10px);
      }

      100% {
        transform: rotate(0deg) translate(0px, 0px);
      }
    }
  }

  @media screen and (min-width: 600px) {
    width: auto;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-flow: row wrap;
  font-size: 3rem;
  color: #eaeaea;
  font-family: 'Righteous', cursive;
  line-height: 0.7;
  margin-bottom: 0px;

  @media screen and (min-width: 600px) {
    width: auto;
    font-size: 3.5rem;
  }

  @media screen and (min-width: 900px) {
    width: auto;
    font-size: 5rem;
  }

  & div:nth-of-type(1) div:nth-of-type(1) {
    color: var(--clr-primary-5);
  }
`;

export const Letter = styled.span`
  display: block;
  transition: var(--fast-transition);

  &:hover {
    color: #de7310;
    animation: jello-horizontal 0.6s both;
    @keyframes jello-horizontal {
      0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
  }
`;

export const TitleWord = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 10px;

  @media screen and (min-width: 600px) {
    margin-bottom: 20px;
    margin-right: 20px;
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 40px;
  }
`;

export const Subtitle = styled.h2`
  display: flex;
  flex-flow: row wrap;
  font-size: 1.5rem;
  color: #a9a9a9;
  font-family: 'Righteous', cursive;
  line-height: 0.7;
  margin-bottom: 0px;

  @media screen and (min-width: 600px) {
    width: auto;
  }
`;

export const SubTitleWord = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 10px;

  @media screen and (min-width: 600px) {
    font-size: 1.75rem;
    margin-right: 20px;
  }

  @media screen and (min-width: 900px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

export const LinkTo = styled(Link)``;
