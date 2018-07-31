import React, { PureComponent } from 'react'
import styled from 'styled-components'
import HashLine from './HashLine/Hash_line'

class Hash extends PureComponent {
  render () {
    const HashGrid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    z-index: 0;
    `

    return (
      <HashGrid className='hash-grid'>
        <HashLine linePosition='top' transition='1' />
        <HashLine linePosition='bottom' transition='2' />
        <HashLine linePosition='left' transition='3' />
        <HashLine linePosition='right' transition='4' />
      </HashGrid>
    )
  }
};

export default Hash
