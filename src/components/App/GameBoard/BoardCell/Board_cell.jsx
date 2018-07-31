import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class BoardCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      occupation: null,
    };
  }

  render() {
    const { cell } = this.props;
    const { occupation } = this.state;
    const Cell = styled.div`
      height: 33.33%;
      width: 33.33%;
      box-sizing: border-box;
      border: 1px solid rgba(0,255,255,0.5);
      padding: 10px;
      z-index: 1;
    `;
    return (
      <Cell onClick={(e) => {
        e.stopPropagation()
        this.props.handleClick(cell)}
      }>X
        {occupation && 'X'}
      </Cell>
    );
  }
}

BoardCell.propTypes = {
  cell: PropTypes.oneOf(['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BoardCell;
