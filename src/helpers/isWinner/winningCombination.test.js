import winningCombination from './winningCombination.js'

describe('winningCombination', () => {
  it('returns expected winning combination', () => {
    expect(winningCombination(['A1', 'A2', 'B2', 'C3'])).toEqual(['A1', 'B2', 'C3'])
    expect(winningCombination(['A1', 'A2', 'B1', 'C1'])).toEqual(['A1', 'B1', 'C1'])
    expect(winningCombination(['A2', 'B2', 'B3', 'C1', 'C2'])).toEqual(['A2', 'B2', 'C2'])
    expect(winningCombination(['A1', 'A3', 'B3', 'C1', 'C3'])).toEqual(['A3', 'B3', 'C3'])
    expect(winningCombination(['A1', 'A3', 'C1', 'C2', 'C3'])).toEqual(['C1', 'C2', 'C3'])
    expect(winningCombination(['B1', 'B2', 'B3', 'C2', 'C3'])).toEqual(['B1', 'B2', 'B3'])
    expect(winningCombination(['A1', 'A2', 'A3', 'C1', 'C2'])).toEqual(['A1', 'A2', 'A3'])
    expect(winningCombination(['A3', 'B2', 'C1', 'C2'])).toEqual(['A3', 'B2', 'C1'])
  })
  it.only('returns null if there is no winner', () => {
    expect(winningCombination(['A1', 'A2', 'B1'])).toBeFalsy()
    expect(winningCombination(['A1', 'A2', 'B1'])).toBe(null)
    expect(winningCombination(['B1', 'B2', 'C1'])).toBe(null)
  })
})
