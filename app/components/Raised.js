import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  grid-area: 2 / 5 / span 3 / span 2;
  border: 5px solid black;
  justify-content: center;
  font-size: 20px;
  background-color: #eae4d6;
`;

const Raised = () => {
  return <Div>Totals Raised here</Div>;
};

export default Raised;
