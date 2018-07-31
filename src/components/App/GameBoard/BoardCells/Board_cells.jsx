import React from 'react'
import Cell from './Cell'

export default ({ handleClick, occupations }) => (
  [
    'A1', 'A2', 'A3',
    'B1', 'B2', 'B3',
    'C1', 'C2', 'C3'
  ].map(cell => (
    <Cell
      className='cell'
      key={cell}
      cellID={cell}
      handleClick={handleClick}
      occupation={occupations[cell]}
    />))
)
