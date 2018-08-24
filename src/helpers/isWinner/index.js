import { playerOccupations } from './playerOccupations.js'
import winningCombination from './winningCombination.js'

export default (occupations, player) => {
  const currentPlayerOccupations = playerOccupations(occupations, player)

  return winningCombination(currentPlayerOccupations)
  ? winningCombination(currentPlayerOccupations)
  : false
}
