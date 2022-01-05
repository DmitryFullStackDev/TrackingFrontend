import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routesRender'
import { history } from './store'

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Routes />
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

export default App
