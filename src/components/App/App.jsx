import React from 'react'
import { hot } from 'react-hot-loader'
import PageHeader from './PageHeader/Page_header'
import GameBoardContainer from '../../containers/GameBoardContainer/Game_board_container'

import './App.scss'

const App = () => (
  <section className='App'>
    <PageHeader />
    <GameBoardContainer />
  </section>
)

export default hot(module)(App)
