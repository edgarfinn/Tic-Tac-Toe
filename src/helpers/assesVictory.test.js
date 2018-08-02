import assessVictory from './assesVictory'

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

describe('assessVictory', () => {
  it('returns true when X occupies row A', () => {
    const winningCells = {
      'A1': 'crosses',
      'A2': 'crosses',
      'A3': 'crosses'
    }
    const occupations = {
      ...blankOccupations,
      ...winningCells
    }
    expect(assessVictory(occupations)).toEqual(winningCells)
  })
})
