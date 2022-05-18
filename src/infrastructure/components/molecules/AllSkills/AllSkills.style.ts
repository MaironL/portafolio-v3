import styled, { css } from 'styled-components';

export const SkillsBg = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  border-radius: 5px;
  margin-bottom: 80px;

  @media screen and (min-width: 600px) {
    width: max(500px, 80%);
    margin-bottom: 50px;
  }

  @media screen and (min-width: 900px) {
    width: clamp(385px, 50%, 80%);
  }

  @media screen and (min-width: 1200px) {
    width: 520px;
  }
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
  background-color: var(--clr-bg-1);
  border-radius: 50%;

  @media screen and (min-width: 600px) {
    margin: 20px;
    /* width: 80px;
    height: 80px; */
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
