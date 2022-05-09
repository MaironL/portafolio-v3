import styled, { css } from 'styled-components';

interface HamburgerButtonProps {
  show: boolean;
}
//menu-btn
export const Hamburger = styled.div<HamburgerButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  z-index: 50;
  cursor: pointer;
  transition: var(--slow-transition);
  ${({ show }) =>
    show
      ? css`
          transform: rotate(180deg);
        `
      : css``}
`;

//menu-btn__burger
export const Bar = styled.div<HamburgerButtonProps>`
  width: 50px;
  height: 3px;
  background-color: #de7310;
  border-radius: 5px;
  box-shadow: 0 2px 5px #de7310;
  transition: var(--slow-transition);
  ${({ show }) =>
    show
      ? css`
          /* transform: translateX(-50px); */
          background: transparent;
          box-shadow: none;
        `
      : css``}

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: var(--clr-primary-5);
    border-radius: 5px;
    box-shadow: 0 2px 5px var(--clr-primary-4);
    transition: var(--slow-transition);
  }

  &::before {
    transform: translateY(-10px) translateX(10px);
    width: 40px;
    ${({ show }) =>
      show
        ? css`
            transform: rotate(45deg) translate(0px, 0px);
            width: 50px;
          `
        : css``}
  }

  &::after {
    transform: translateY(10px) translateX(15px);
    width: 35px;
    ${({ show }) =>
      show
        ? css`
            transform: rotate(-45deg) translate(0px, 0px);
            width: 50px;
          `
        : css``}
  }
`;
