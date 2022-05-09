import styled, { css } from 'styled-components';

interface BtnLinkProps {
  center?: string;
}

export const BtnLink = styled.button<BtnLinkProps>`
  position: relative;
  margin: ${({ center }) => (center === 'true' ? '0 auto' : '30px 0 20px 0')};
  border-radius: 5px;
  overflow: hidden;
  border: none;
  background-color: transparent;
  &:hover {
    box-shadow: ${({ disabled }) => !disabled && '0px 0px 10px rgba(0, 0, 0, 0.3)'};
  }

  &:hover {
    & div {
      top: ${({ disabled }) => (disabled ? '-80px' : '-130px')};
      box-shadow: ${({ disabled }) => (disabled ? '' : 'inset 0 0 50px var(--clr-logo-orange)')};
      background-color: ${({ disabled }) => (disabled ? 'var(--clr-grey-6)' : '#444857')};
      background-position: left;
    }
  }
`;

interface TextProps {
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const Text = styled.span<TextProps>`
  display: block;
  position: relative;
  font-family: inherit;
  font-weight: 600;
  z-index: 1;
  color: white;
  letter-spacing: 8px;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 16px;
          width: 150px;
          padding: 15px 6px;

          @media screen and (min-width: 600px) {
            width: 170px;
            padding: 20px 10px;
          }
        `;
      case 'medium':
        return css`
          font-size: 16px;
          width: 180px;
          padding: 22px 12px;

          @media screen and (min-width: 600px) {
            width: 190px;
            padding: 25px 10px;
          }
        `;
      case 'large':
        return css`
          font-size: 16px;
          width: 190px;
          padding: 25px 10px;

          @media screen and (min-width: 600px) {
            font-size: 18px;
            width: 200px;
            padding: 30px 15px;
          }

          @media screen and (min-width: 900px) {
            width: 220px;
            padding: 30px 30px;
          }
        `;
    }
  }}
`;

interface waveProps {
  disabled?: boolean;
  size: 'small' | 'medium' | 'large';
}

export const Wave = styled.div<waveProps>`
  background-color: ${({ disabled }) => (disabled ? 'var(--clr-grey-6)' : 'var(--clr-primary-3)')};
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.75);
  position: absolute;
  left: 0;
  top: -80px;
  transition: 0.4s;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 150px;
          height: 190px;

          @media screen and (min-width: 600px) {
            width: 170px;
            height: 200px;
          }
        `;
      case 'medium':
        return css`
          width: 180px;
          height: 210px;

          @media screen and (min-width: 600px) {
            width: 190px;
            height: 210px;
          }
        `;
      case 'large':
        return css`
          width: 190px;
          height: 210px;

          @media screen and (min-width: 600px) {
            width: 200px;
            height: 215px;
          }

          @media screen and (min-width: 900px) {
            width: 220px;
            height: 220px;
          }
        `;
    }
  }}

  &::before,
  &::after {
    width: 200%;
    height: 200%;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  &::before {
    border-radius: 45%;
    background-color: rgba(20, 20, 20, 0.6);
    animation: wave 5s linear infinite;
    animation-play-state: ${({ disabled }) => (disabled ? 'paused' : 'running')};
  }

  &::after {
    border-radius: 40%;
    background-color: rgba(20, 20, 20, 0.6);
    animation: wave 10s linear infinite;
    animation-play-state: ${({ disabled }) => (disabled ? 'paused' : 'running')};
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;
