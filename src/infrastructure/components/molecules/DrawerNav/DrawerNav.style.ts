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
  z-index: 10;
  transform: ${({ show }) => (show === true ? 'translateX(0)' : 'translateX(100%)')};
  box-shadow: -1px 0px 1px var(--clr-util-grey);
  background-color: var(--clr-black-glass);
  transition: var(--fast-transition);

  & .active {
    box-shadow: 0px 0px 5px var(--clr-logo-orange);
    color: var(--clr-logo-orange);
  }
`;

export const link = styled(NavLink)`
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
  ${({ show }) =>
    show
      ? css`
          display: block;
          background-color: hsl(0, 0%, 0%, 10%);
          backdrop-filter: blur(5px);
        `
      : css`
          display: none;
        `}

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
