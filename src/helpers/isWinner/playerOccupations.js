export const playerOccupations = (occupations, player) => {
  const boardCells = Object.keys(occupations)
  return boardCells.filter(cell => {
    return occupations[cell] === player
  })
}
