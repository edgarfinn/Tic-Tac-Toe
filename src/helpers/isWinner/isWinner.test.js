import isWinner from './isWinner.js'

describe('isWinner', () => {
  it('returns expected winning combination', () => {
    expect(isWinner(['A1', 'A2', 'B2', 'C3'])).toEqual(['A1', 'B2', 'C3'])
  })
})
