import styled from 'styled-components';

export const Cont = styled.main`
  grid-area: main;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--clr-bg-2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--clr-grey-7);
  }
`;

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0 2.5%;
  width: 100%;
  height: 100vh;
`;

export const ProjecsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;
  width: 100%;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;
  width: 100%;
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;
  width: 100%;
  margin-bottom: 100px;
`;
