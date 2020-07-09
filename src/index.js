import React from 'react'
import { render } from 'react-dom'
import App from 'core/App'

import 'core/i18n-config'
import 'core/axios-config'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
