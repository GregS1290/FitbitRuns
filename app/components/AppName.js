import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  grid-area: 1 / 2 / span 1 / span 4;
  border: 5px solid black;
  justify-content: center;

  font-size: 40px;
`;

const AppName = () => {
  return <Title>Fitbit App Title Here</Title>;
};

export default AppName;
