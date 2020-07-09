import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import theme from 'core/theme-styled'
import GlobalStyle from 'core/global-style'
import routes from 'core/Routes'

import Header from 'components/Header/components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          {routes?.map(item => (
            <Route key={item.path} {...item} />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
