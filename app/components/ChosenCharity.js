import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  grid-area: 7 / 2 / span 2 / span 3;
  justify-content: center;
  font-size: 20px;
  background-color: #eae4d6;
  border: 2px solid black;
  border-radius: 5px;
`;

const ChosenCharity = (props) => {
  return <Div>{props.charity ? props.charity : `Please choose a charity`}</Div>;
};

export default ChosenCharity;
