import styled from 'styled-components';

export const Cont = styled.main`
  grid-area: main;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--clr-bg-2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--clr-grey-7);
  }
`;
