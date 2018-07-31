export const NEW_MOVE = 'NEW_MOVE'

export const newMove = (occupations, currentPlayer, cell) => (
  {
    type: NEW_MOVE,
    payload: { ...occupations, [cell]: currentPlayer }
  }
)
