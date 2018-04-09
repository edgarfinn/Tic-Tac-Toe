import React from 'react';
import styled from 'styled-components';

export default ({ cell }) => {
  const Cell = styled.div`
    height: 33.33%;
    width: 33.33%;
    box-sizing: border-box;
    padding: 10px;
  `;
  return (
    <Cell>{cell}</Cell>
  );
};
