import styled, { StyledComponent } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { IconType } from 'react-icons';

export const DropDown: StyledComponent<IconType, any, {}, never> = styled(FaAlignRight)`
  color: var(--clr-primary-4);
  font-size: 2.2rem;

  &:hover {
    color: var(--clr-primary-5);
    cursor: pointer;
  }
`;

export const DropDownContent: StyledComponent<'div', any, {}, never> = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  right: 2px;
  top: 100%;
  width: 75vw;
  height: 75vh;
  border-radius: 10px;
  z-index: 10;
  background-color: var(--clr-white);

  & .active {
    text-decoration: underline solid 4px var(--clr-primary-5);
  }
`;

export const DropDownFocus: StyledComponent<'div', any, {}, never> = styled.div`
  background-color: hsl(0, 0%, 0%, 90%);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const DropDownCont: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8%;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const link = styled(NavLink)`
  color: var(--clr-grey-2);
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-6);
  }
`;
