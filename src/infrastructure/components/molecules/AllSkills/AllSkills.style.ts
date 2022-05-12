import styled, { css } from 'styled-components';
import { Section, animDiv } from 'globalStyle';

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
  width: 90%;
`;

export const SkillsBg = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 10px 60px;
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
  margin: 20px 10px;
  width: 80px;
  height: 80px;
  padding: 10px;
  background-color: var(--clr-bg-2);
  border-radius: 50%;

  @media screen and (min-width: 600px) {
    margin: 20px;
    width: 90px;
    height: 90px;
  }

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