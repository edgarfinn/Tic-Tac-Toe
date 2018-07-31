import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Cross = () => {
  const Box = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const Line = styled.div`
  height: 100%;
  width: 0;
  border: 1.5px solid black;
  transform: ${props => props.forward ? 'rotate(45deg)' : 'rotate(-45deg)'};
  -webkit-transform: ${props => props.forward ? 'rotate(45deg)' : 'rotate(-45deg)'};
  `
  return (
    <Box className='mark'>
      <Line forward />
      <Line />
    </Box>
  )
}

Cross.propTypes = {
  forward: PropTypes.bool
}

const Naught = styled.div`
  border: 3px solid black;
  border-radius: 50%;
  height: 90%;
  width: 90%;
`

const Marker = ({ mark }) => {
  return mark === 'noughts' ? <Naught /> : <Cross />
}

Marker.propTypes = {
  mark: PropTypes.oneOf(['noughts', 'crosses']).isRequired
}

export default Marker
