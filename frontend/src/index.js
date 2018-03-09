import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { injectGlobal, ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'
import configureStore from './services/store'

import theme from './theme'

injectGlobal(`
  body {
    font-family: sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`)
// import registerServiceWorker from './registerServiceWorker'
const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
