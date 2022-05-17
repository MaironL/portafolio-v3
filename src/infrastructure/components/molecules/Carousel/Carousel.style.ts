import styled, { css } from 'styled-components';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

export const Cont = styled.div`
  position: relative;
  display: none;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  height: 330px;
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
  }

  @media screen and (max-height: 600px) {
    display: none;
  }
`;

export const LeftArrow = styled(MdOutlineArrowBackIos)`
  position: absolute;
  bottom: 0%;
  left: 5%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: var(--clr-grey-1);
  cursor: pointer;

  &:hover {
    color: var(--clr-grey-2);
  }
`;

export const RightArrow = styled(MdOutlineArrowForwardIos)`
  position: absolute;
  bottom: 0%;
  right: 5%;
  transform: translate(50%, -50%);
  font-size: 30px;
  color: var(--clr-grey-1);
  cursor: pointer;
  &:hover {
    color: var(--clr-grey-2);
  }
`;

interface CarouselProps {
  position?: string;
}

export const CarouselImg = styled.img<CarouselProps>`
  position: absolute;
  max-width: 100%;
  height: 100%;
  left: 10%;
  top: 0%;
  margin: 0;
  transition: var(--slow-transition);
  ${({ position }) =>
    position === 'active'
      ? css`
          opacity: 1;
          transform: translateX(0%);
        `
      : position === 'left'
      ? css`
          opacity: 0;
          transform: translateX(-115%);
        `
      : css`
          opacity: 0;
          transform: translateX(115%);
        `}
`;
