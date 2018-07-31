import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'

import App from './components/App/App'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
