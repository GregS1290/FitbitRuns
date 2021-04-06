import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  grid-area: 5 / 5 / span 4 / span 2;
  border: 5px solid black;
  justify-content: center;
  font-size: 20px;
  background-color: #eae4d6;
`;

const VsGoal = () => {
  return <Div>Pie Chart here</Div>;
};

export default VsGoal;
