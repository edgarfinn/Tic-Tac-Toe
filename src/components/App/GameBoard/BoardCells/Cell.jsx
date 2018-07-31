import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Marker from './Marker'

class Cell extends Component {
  render () {
    const { cellID, occupation } = this.props
    const Cell = styled.div`
      height: 33.33%;
      width: 33.33%;
      box-sizing: border-box;
      padding: 10px;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    `
    return (
      <Cell onClick={() => {
        this.props.handleClick(cellID)
      }
      }>
        {occupation !== null && <Marker mark={occupation} />}
      </Cell>
    )
  }
}

Cell.propTypes = {
  cellID: PropTypes.oneOf(['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']).isRequired,
  handleClick: PropTypes.func.isRequired,
  occupation: PropTypes.string
}

export default Cell
