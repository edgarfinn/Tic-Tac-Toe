import { NOUGHTS, CROSSES } from '../../constants/players.js'
import { playerOccupations } from './playerOccupations.js'

const blankOccupations = {
  A1: null,
  A2: null,
  A3: null,
  B1: null,
  B2: null,
  B3: null,
  C1: null,
  C2: null,
  C3: null
}

describe.only('playerOccupations', () => {
  const test1 = {
    ...blankOccupations,
    A1: CROSSES,
    B2: CROSSES,
    A2: NOUGHTS,
    B1: NOUGHTS,
    C2: CROSSES
  }
  const test2 = {
    ...blankOccupations,
    A1: NOUGHTS,
    B2: NOUGHTS,
    B3: CROSSES,
    C3: CROSSES
  }

  it('returns crosses when expected', () => {
    expect(playerOccupations(test1, CROSSES)).toEqual(['A1', 'B2', 'C2'])
    expect(playerOccupations(test1, NOUGHTS)).toEqual(['A2', 'B1'])
    expect(playerOccupations(test2, CROSSES)).toEqual(['B3', 'C3'])
    expect(playerOccupations(test2, NOUGHTS)).toEqual(['A1', 'B2'])
  })
})
