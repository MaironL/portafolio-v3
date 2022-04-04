import styled, { css } from 'styled-components';
import { MainHeader, Section, animDiv } from 'globalStyle';

export const Cont = styled.main`
  grid-area: main;
  min-height: 100vh;
  position: relative;
`;

export const Header = styled(MainHeader)``;

export const Description = styled(Section)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;

  p {
    text-align: justify;
    color: var(--clr-grey-9);
  }

  @media screen and (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const SkillsBg = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 50px 60px;
`;

export const SubtitleCont = styled(animDiv)`
  width: fit-content;
  margin: 0 auto;

  & h2 {
    color: var(--clr-grey-9);
  }

  & hr {
    border: solid 1px var(--clr-primary-5);
    margin-bottom: max(50px, 10vh);
    max-width: 100%;
  }
`;

export const SkillsCont = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: min(500px, 100vw);
`;

interface SkillProps {
  name: string;
}

export const Skill = styled.figure<SkillProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: clamp(90px, 8vw, 115.188px);
  height: clamp(90px, 8vw, 115.188px);
  padding: 10px;
  background-color: var(--clr-bg-2);
  border-radius: 50%;

  & img {
    ${({ name }) =>
      name === 'Express'
        ? css`
            max-width: 100%;
            height: auto;
          `
        : css`
            max-height: 50%;
            width: auto;
          `}
  }

  & figcaption {
    font-size: 0.8rem;
    position: absolute;
    text-align: center;
    bottom: -25px;
    width: 150px;
    color: var(--clr-grey-9);
    font-weight: 500;
  }
`;

export const JobsCont = styled(Section)`
  padding: 50px 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
