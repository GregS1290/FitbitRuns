import React from 'react';
import styled from 'styled-components';

const GraphDiv = styled.div`
  display: flex;
  grid-area: 2 / 2 / span 5 / span 3;
  border: 5px solid black;
  justify-content: center;
  font-size: 40px;
  background-color: #eae4d6;
`;

const Runs = () => {
  return <GraphDiv>Runs for the week of X/XX - X/XX</GraphDiv>;
};

export default Runs;
