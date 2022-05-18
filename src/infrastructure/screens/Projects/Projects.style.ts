import styled from 'styled-components';

export const Cont = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 2.5%;
  background-color: var(--clr-bg-1);

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 100%, 0.2);
    outline: 1px solid hsl(0, 0%, 100%, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--clr-grey-7);
  }
`;
