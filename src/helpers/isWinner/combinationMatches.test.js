import { combinationMatches } from './combinationMatches.js'
import winningCombinations from '../../constants/winningCombinations.js'

describe('combinationMatches', () => {
  const A1A2A3 = winningCombinations[0]
  const B1B2B3 = winningCombinations[1]
  const C1C2C3 = winningCombinations[2]
  const A1B1C1 = winningCombinations[3]
  const A3B3C3 = winningCombinations[5]
  const A3B2C1 = winningCombinations[7]
  it('returns true when expected', () => {
    expect(combinationMatches(A1A2A3, ['A1', 'A2', 'A3', 'B2', 'C1'])).toBe(true)
    expect(combinationMatches(B1B2B3, ['A1', 'B1', 'B2', 'B3', 'C3'])).toBe(true)
    expect(combinationMatches(C1C2C3, ['A1', 'B1', 'C1', 'C2', 'C3'])).toBe(true)
    expect(combinationMatches(A1B1C1, ['A1', 'B1', 'C1', 'C2', 'C3'])).toBe(true)
    expect(combinationMatches(A3B3C3, ['A1', 'A2', 'A3', 'B3', 'C3'])).toBe(true)
    expect(combinationMatches(A3B2C1, ['A2', 'A3', 'B2', 'C1', 'C2'])).toBe(true)
  })
  it('returns false when expected', () => {
    expect(combinationMatches(A1A2A3, ['A2', 'A3', 'B2', 'C1'])).toBe(false)
    expect(combinationMatches(B1B2B3, ['A1', 'A2', 'B2', 'B3', 'C3'])).toBe(false)
    expect(combinationMatches(C1C2C3, ['A1', 'B1', 'B2', 'C2', 'C3'])).toBe(false)
    expect(combinationMatches(A1B1C1, ['A1', 'B2', 'C1', 'C2', 'C3'])).toBe(false)
    expect(combinationMatches(A3B3C3, ['A1', 'A2', 'B2', 'B3', 'C3'])).toBe(false)
    expect(combinationMatches(A3B2C1, ['A1', 'A2', 'B2', 'C1', 'C2'])).toBe(false)
  })
  // returns false when no winning combos
})
