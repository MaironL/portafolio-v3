import styled from 'styled-components';
import { MainHeader } from 'globalStyle';

export const Header = styled(MainHeader)`
  position: relative;

  & h3 {
    &::after {
      content: 'Contacto';
      z-index: -1;
      position: absolute;
      top: -90px;
      left: 0px;
      font-size: 200px;
      text-shadow: -10px -30px 40px #252526;
      color: var(--clr-bg-2);
    }
  }
`;

export const ConfirmCont = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 40px 1fr 0.2fr;
  grid-template-rows: auto 50px 1fr 1fr;
  margin-top: 10%;
  text-align: center;
`;

export const ConfirmTitle = styled.h1`
  grid-row: 1/2;
  grid-column: 2/5;
  color: var(--clr-grey-9);
`;

export const ConfirmMsg = styled.p`
  grid-row: 2/3;
  grid-column: 2/5;
  color: black;
  z-index: 100;
  font-size: 1.5rem;
  color: var(--clr-grey-9);
`;

export const ConfirmImg = styled.img`
  grid-row: 3/5;
  grid-column: 3/5;
  max-width: 100%;
  height: auto;
  opacity: 90%;
  border-radius: 5px;

  @media screen and (max-width: 899px) {
    grid-row: 3/5;
    grid-column: 2/5;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: min(500px, 90%);
`;

export const Field = styled.div`
  margin-bottom: 8px;
  position: relative;
  width: 100%;
`;

interface ValProps {
  Error: Boolean;
}

export const Input = styled.input<ValProps>`
  border-color: transparent;
  outline: none;
  border-radius: 1px;
  padding: 15px;
  height: 50px;
  background-color: var(--clr-bg-1);
  color: var(--clr-grey-9);
  font-size: 1rem;
  width: 100%;
  border-right: ${(props) => (props.Error ? '4px solid rgba(240, 52, 43, 0.8)' : null)};
  box-shadow: ${(props) => (props.Error ? '-4px 5px 12px -3px rgba(240, 52, 43, 0.3)' : null)};

  &:focus {
    border: 1px solid var(--clr-primary-5);
    &::placeholder {
      color: var(--clr-grey-9);
      opacity: 0.65;
    }
  }

  &::placeholder {
    font-size: 1rem;
    font-weight: 600;
    color: var(--clr-grey-4);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const ErrorsCont = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 10px;
  height: 80;
  width: fit-content;
`;

export const ErrorCont = styled.li`
  background-color: var(--clr-bg-1);
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px;
  border-right: 4px solid rgba(240, 52, 43, 0.8);
`;

export const Error = styled.p`
  width: fit-content;
  margin: 0;
  color: hsl(0, 100%, 70%);
  font-family: inherit;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const TextArea = styled.textarea<ValProps>`
  border-radius: 1px;
  border-color: transparent;
  outline: none;
  padding: 15px;
  background-color: var(--clr-bg-1);
  color: var(--clr-grey-9);
  font-size: 1rem;
  width: 100%;
  border-right: ${(props) => (props.Error ? '4px solid rgba(240, 52, 43, 0.8)' : null)};
  box-shadow: ${(props) => (props.Error ? '-4px 5px 12px -3px rgba(240, 52, 43, 0.3)' : null)};
  margin-bottom: 20px;
  resize: none;

  &:focus {
    border: 1px solid var(--clr-primary-5);
    &::placeholder {
      color: var(--clr-grey-9);
      opacity: 0.65;
    }
  }

  &::placeholder {
    font-size: 1rem;
    font-weight: 600;
    color: var(--clr-grey-4);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Submit = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 auto 20px auto;
  width: 120px;
  height: 35px;
  border-radius: 10px;
  border-color: transparent;
  color: var(--clr-grey-2);
  background-color: ${(props: any): any =>
    props.disabled ? 'var(--clr-grey-4)' : 'var(--clr-primary-5)'};

  &:hover {
    color: ${(props: any): any => (props.disabled ? 'var(--clr-grey-2)' : 'var(--clr-grey-1)')};
    background-color: ${(props: any): any =>
      props.disabled ? 'var(--clr-grey-4)' : 'var(--clr-primary-6)'};
  }
  &:active {
    box-shadow: 5px 10px 15px var(--clr-primary-6) inset;
  }
`;
