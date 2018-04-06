import React from 'react';
import styled from 'styled-components';
import HashLine from './HashLine/Hash_line';

const Hash = () => {
  const HashGrid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  `;

  return (
    <HashGrid>
      <HashLine linePosition="top" />
      <HashLine linePosition="bottom" />
      <HashLine linePosition="left" />
      <HashLine linePosition="right" />
    </HashGrid>
  );
};

export default Hash;
