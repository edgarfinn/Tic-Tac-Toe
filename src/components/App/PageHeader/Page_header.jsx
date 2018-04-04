import React from 'react';
import styled from 'styled-components';

export default () => {
  const Header = styled.header`
    background: inherit;
    position: relative;
    overflow: hidden;
    padding: 1em;
  `;

  const Title = styled.h1`
    font-family: 'Permanent Marker';
    color: #fc8aa6;
    font-size: 3em;

    @media only screen and (min-width: 735px) {
      font-size: 4em;
    }
  `;

  return (
    <Header>
      <Title>Tic Tac Toe</Title>
    </Header>
  );
};
