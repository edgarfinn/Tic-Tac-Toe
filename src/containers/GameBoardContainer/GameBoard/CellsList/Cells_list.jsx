import React from 'react';
import BoardCell from '../BoardCell/Board_cell';

export default ({ cells }) => cells.map(cell => <BoardCell key={cell} cell={cell} />);
