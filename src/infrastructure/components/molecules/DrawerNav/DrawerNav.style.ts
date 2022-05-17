import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface DropDownContentProps {
  show: boolean;
}

export const DropDownCont = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const DropDownContent = styled.div<DropDownContentProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0px;
  top: 0px;
  width: 62vw;
  height: 100vh;
  z-index: 100;
  box-shadow: -1px 0px 1px var(--clr-util-grey);
  background-color: var(--clr-black-glass);
  transition: var(--fast-transition);
  ${({ show }) =>
    show === true
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(105%);
        `};

  & .active {
    box-shadow: 0px 0px 5px var(--clr-logo-orange);
    color: var(--clr-logo-orange);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  width: 100%;
  color: var(--clr-grey-9);
  font-size: 1.3rem;
  font-weight: 500;
  box-shadow: 0px -0.5px 1px var(--clr-util-grey), -1px 0.5px 1px var(--clr-util-grey);
  transition: var(--transition);

  &::active {
    color: var(--clr-logo-orange);
  }
`;

export const DropDownFocus = styled.div<DropDownContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 95;
  ${({ show }) =>
    show
      ? css`
          display: block;
          background-color: hsl(0, 0%, 0%, 10%);
          backdrop-filter: blur(5px);
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

export const SocialCont = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
`;

export const SocialLink = styled.a`
  display: block;
`;

export const SocialLinkImg = styled.img`
  width: 25px;
  height: auto;
  image-rendering: crisp-edges;
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  transition: var(--fast-transition);

  &:hover {
    transform: scale(1.1);
    filter: invert(49%) sepia(67%) saturate(429%) hue-rotate(352deg) brightness(95%) contrast(85%)
      drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4));
  }
`;
