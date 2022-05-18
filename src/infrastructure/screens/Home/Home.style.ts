import styled from 'styled-components';

export const Cont = styled.main`
  grid-area: main;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 100%, 0.2);
    outline: 1px solid hsl(0, 0%, 100%, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--clr-grey-7);
  }
  scroll-behavior: smooth;

  @media screen and (min-width: 900px) {
    scroll-snap-type: y proximity;
  }
`;

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0 2.5%;
  width: 100%;
  height: max(500px, 100vh);

  @media screen and (min-width: 900px) {
    scroll-snap-align: start;
  }
`;

export const ProjecsSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0 2.5%;
  width: 100%;

  background-color: var(--clr-bg-1);

  @media screen and (min-width: 900px) {
    height: max(700px, 100vh);
    scroll-snap-align: start;
  }
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0 2.5%;

  @media screen and (min-width: 900px) {
    /* height: max(700px, 100vh); */
    scroll-snap-align: start;
  }
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0 2.5%;
  width: 100%;
  background-color: var(--clr-bg-1);

  @media screen and (min-width: 900px) {
    height: max(750px, 100vh);
    scroll-snap-align: start;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0 2.5%;
  width: 100%;
  padding-bottom: 50px;

  @media screen and (min-width: 900px) {
    padding-bottom: 0px;
    height: max(700px, 100vh);
    scroll-snap-align: start;
  }
`;
