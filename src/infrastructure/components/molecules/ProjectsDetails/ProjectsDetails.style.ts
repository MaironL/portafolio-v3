import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/io';

interface ContProps {
  show: boolean;
}

export const Cont = styled.div<ContProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90%, 560px);

  ${({ show }) =>
    show
      ? css`
          display: block;
          animation: show 0.5s ease-in-out forwards;
        `
      : css`
          display: none;
          opacity: 0;
        `}

  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  border-radius: 5px;
  position: absolute;
  top: calc(50% + 45px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(100%, 600px);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  z-index: 10;

  @media screen and (min-width: 1200px) {
    top: 50%;
  }
`;

export const Close = styled(IoMdClose)`
  position: absolute;
  top: 5%;
  left: 95%;
  z-index: 50;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: var(--clr-grey-1);
  cursor: pointer;

  &:hover {
    color: var(--clr-grey-2);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px 10px 20px;
  width: 100%;
  background-color: whitesmoke;
`;

export const Title = styled.h4`
  font-family: righteous;
  color: var(--clr-grey-1);
  text-align: left;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  color: var(--clr-grey-3);
  text-align: justify;
  margin: 0;
`;

export const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  @media screen and (min-width: 600px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 900px) {
    justify-content: flex-end;
  }
`;

export const GoTo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #333333;
  color: whitesmoke;
  outline: none;
  border: none;
  letter-spacing: 1px;
  height: 40px;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  transition: var(--slow-transition);

  &:hover {
    color: transparent;

    svg {
      left: 50%;
      color: whitesmoke;
    }

    &::before {
      left: 100%;
      width: 25%;
    }

    &::after {
      left: 100%;
      width: 70%;
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    left: -30%;
    transform: translate(-50%, -50%);
    font-size: 26px;
    transition: var(--slow-transition);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 55%;
    z-index: -1;
    background-color: #202020;
    transition: var(--slow-transition);
  }

  &:after {
    content: '';
    position: absolute;
    left: -5%;
    top: 5%;
    height: 90%;
    width: 5%;
    background-color: whitesmoke;
    z-index: -1;
    transition: var(--slow-transition);
  }
`;

export const Link = styled.a`
  width: 100%;
  margin: 10px 0 0 0;

  @media screen and (min-width: 600px) {
    width: 48%;
  }

  @media screen and (min-width: 900px) {
    width: 200px;
    margin-left: 20px;
  }
`;

export const Skills = styled.div`
  padding: 10px 20px;
  background-color: #333333;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (min-width) {
    justify-content: flex-start;
  }
`;

interface SkillProps {
  skill: string;
}

export const Skill = styled.span<SkillProps>`
  display: block;
  font-family: righteous;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  padding: 5px 10px;
  margin: 5px 5px;
  border-radius: 15px;
  min-width: 120px;

  ${({ skill }) =>
    skill === 'HTML'
      ? css`
          background-color: #dd4b25;
          color: #f7f7f7;
        `
      : skill === 'CSS'
      ? css`
          background-color: #0068ba;
          color: #f7f7f7;
        `
      : skill === 'JavaScript'
      ? css`
          background-color: #efd81d;
          color: #000000;
        `
      : skill === 'Bootstrap'
      ? css`
          background-color: #7811f2;
          color: #f6e8f2;
        `
      : skill === 'React'
      ? css`
          background-color: #5ed3f3;
          color: #212121;
        `
      : skill === 'Redux'
      ? css`
          background-color: #7248b6;
          color: #f7f7f7;
        `
      : skill === 'SASS'
      ? css`
          background-color: #c96195;
          color: #f7f7f7;
        `
      : skill === 'Styled Components'
      ? css`
          background: rgb(223, 103, 143);
          background: linear-gradient(90deg, rgba(223, 103, 143, 1) 0%, rgba(238, 175, 95, 1) 100%);
          color: var(--clr-grey-2);
        `
      : skill === 'Tailwind'
      ? css`
          background: rgb(62, 162, 178);
          background: linear-gradient(90deg, rgba(62, 162, 178, 1) 0%, rgba(80, 184, 181, 1) 100%);
          color: #151c2c;
        `
      : skill === 'Material UI'
      ? css`
          background-color: #00aaf7;
          color: var(--clr-primary-2);
        `
      : skill === 'Node'
      ? css`
          background-color: #72b158;
          color: #313131;
        `
      : skill === 'Express'
      ? css`
          background-color: #4d4d4d;
          color: var(--clr-grey-9);
        `
      : skill === 'MongoDB'
      ? css`
          background-color: #006548;
          color: var(--clr-grey-9);
        `
      : css`
          background-color: var(--clr-grey-8);
          color: var(--clr-grey-1);
        `}
`;

export const DropDownFocus = styled.div<ContProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  ${({ show }) =>
    show
      ? css`
          display: block;
          background-color: hsl(0, 0%, 0%, 60%);
          animation: show 0.5s ease-in-out forwards;
        `
      : css`
          opacity: 0;
          display: none;
        `}

  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
