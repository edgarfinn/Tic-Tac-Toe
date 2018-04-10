# Tic-Tac-Toe
Tic Tac Toe (a.k.a Noughts and Crosses). Everyones favourite childhood game

Deployed to [heroku here](https://polar-escarpment-82781.herokuapp.com/)

New Move state lifecycle
---

#### Option 1:
###### (Updating the board state in the reducer, before assessing the game play status).

In this option, the state is processed in two consecutive stages: once to update the board occupations, and again to assess whether the game is won, drawn or still ongoing.

- The current player clicks on a board cell.
- The cell's ```onClick``` handler triggers an action creator (```newMove(cell, player)```), passing its cell coordinate and the player ID (i.e ```newMove(A1, X)```) to the newMove action creator.
- The newMove action creator dispatches a new action:

```js
{
  type: 'NEW_MOVE',
  payload: {
    cell: 'A1',
    player: 'X',
  },
}
  ```
  - This action is received by the ```board-occupations``` reducer, which updates the occupations state and issues the updated state to the GameBoard container.
  - The GameBoardContainer's ```componentDidUpdate``` method is invoked, in turn invoking the ```assessVictory``` action creator, passing it the updated occupations state.
  - The ```assesVictory``` action creator passes the updated occupations state to the game play status reducer, which assess whether the game is still ongoing, stalemated, or won.

CONS:
- If anything delays the ```assessVictory``` action creator (ie componentDidUpdate is not called immediately), the losing player could potentially play another go even after they've lost.

#### Option 2:
###### (Updating the board occupations object in the event handler, and then updating occupations state and the game play status state in parallel).

In this option, both the ```board-occupations``` reducer and the ```game-play-status``` reducer respond to the same (```NEW_MOVE```) action.

- The current player clicks on a board cell.
- The cell's ```onClick``` handler takes the board's current occupations, adds the current player's ID to the cell they have chosen to move to, and invokes the ```newMove``` action creator, passing it the updated ```occupations``` object.
- The ```NEW_MOVE``` action creator dispatches the new action:
```js
{
  type: 'NEW_MOVE',
  payload: {
    A1: 'X',
    A2: 'X',
    A3: 'X',
    B1: 'O',
    // etc....
  }
}
```
- This action is received by BOTH the board-occupations reducer AND the game play status reducer simultaneously, which each assess and process any state updates (to either occupations or game play status) in the same event cycle.
