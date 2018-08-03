
export const combinationMatches = (possibleWin, occupations) => {
  return occupations.filter(cell => {
    return possibleWin.indexOf(cell) !== -1
  }).length === 3
}
