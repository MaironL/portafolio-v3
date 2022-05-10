import styled from 'styled-components';

export const Cont = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const staticText = styled.div`
  position: relative;
  top: -1px;
  font-size: 1rem;
  color: #a9a9a9;
  line-height: 35px;

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const dynamicTextList = styled.ul`
  margin-left: 5px;
  width: 100%;
  height: 60px;
  overflow: hidden;

  @media screen and (min-width: 320px) {
    height: 35px;
  }

  @media screen and (min-width: 600px) {
    height: 1.9rem;
  }

  @media screen and (min-width: 900px) {
    height: 2rem;
  }
`;

export const dynamicTextWord = styled.li`
  display: block;
  height: 70px;
  padding-top: 8px;
  font-size: 1rem;
  color: #a9a9a9;
  position: relative;
  top: 0;

  animation: textSlide 30s steps(5) infinite;
  @keyframes textSlide {
    100% {
      top: -350px;
    }
  }

  @media screen and (min-width: 320px) {
    height: auto;
    padding-top: 0;
    line-height: 35px;
    animation: textSlide 30s steps(5) infinite;
    @keyframes textSlide {
      100% {
        top: -175px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const dynamicText = styled.span`
  position: relative;
  top: -1px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0px;
    height: 40px;
    width: 90vw;
    background-color: var(--clr-bg-2);
    border-left: 2px solid var(--clr-primary-5);
    animation: textTyping 6s steps(31) infinite;

    @keyframes textTyping {
      0% {
        left: 0%;
        margin: 0px;
      }

      50% {
        left: 65vw;
        margin: 0 -35px 0 35px;
      }

      75% {
        left: 65vw;
        margin: 0 -35px 0 35px;
        border-left: 2px solid var(--clr-primary-5);
      }

      100% {
        border-left: 20px solid var(--clr-logo-orange);
      }
    }
  }

  @media screen and (min-width: 320px) {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      height: 28px;
      width: 100%;
      background-color: var(--clr-bg-2);
      border-left: 2px solid var(--clr-primary-5);
      animation: textTyping 6s steps(40) infinite;

      @keyframes textTyping {
        0% {
          left: 0%;
          margin: 0px;
        }

        50% {
          left: 100%;
          margin: 0 -35px 0 35px;
        }

        75% {
          left: 100%;
          margin: 0 -35px 0 35px;
          border-left: 2px solid var(--clr-primary-5);
        }

        100% {
          border-left: 20px solid var(--clr-logo-orange);
        }
      }
    }
  }
`;
