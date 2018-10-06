import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'
import Root from 'Root'

import App from 'components/App'

const RenderApp = (
  <Root>
    <App />
  </Root>
)

ReactDOM.render(RenderApp, document.querySelector('#root'))
