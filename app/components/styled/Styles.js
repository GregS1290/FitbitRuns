import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: repeat(8, 1fr);
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
