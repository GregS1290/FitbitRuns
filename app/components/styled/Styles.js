import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 300px);
  grid-template-rows: repeat(8, 110px);
  grid-gap: 5px;
`;

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  border-radius: 5px;
  &:hover {
    background-color: grey;
  }
`;
