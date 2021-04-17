import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  grid-area: 1 / 2 / span 1 / span 3;
  justify-content: center;
  border: 2px solid black;
  border-radius: 5px;

  font-size: 40px;
`;

const AppName = () => {
  return <Title>Fitbit App Title Here</Title>;
};

export default AppName;

//store the token as a cookie
