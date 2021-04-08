import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  grid-area: 2 / 5 / span 3 / span 2;
  justify-content: center;
  font-size: 20px;
  background-color: #eae4d6;
  border: 2px solid black;
  border-radius: 5px;
`;

const Raised = () => {
  return <Div>Totals Raised here</Div>;
};

export default Raised;
