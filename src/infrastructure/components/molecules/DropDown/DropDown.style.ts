import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

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

export const DropDown = styled(FaAlignRight)<DropDownContentProps>`
  color: ${({ show }) => (show ? 'var(--clr-logo-orange)' : 'var(--clr-primary-5)')};
  font-size: 36px;
  margin-right: 20px;
  transition: var(--fast-transition);
  z-index: 50;

  &:hover {
    color: var(--clr-logo-orange);
    cursor: pointer;
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
  background-color: var(--clr-black);
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
`;

export const DropDownFocus = styled.div<DropDownContentProps>`
  background-color: ${({ show }) => (show ? 'hsl(0, 0%, 0%, 10%)' : 'none')};
  backdrop-filter: ${({ show }) => (show ? 'blur(5px)' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
