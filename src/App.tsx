import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routesRender'
import { history } from './store'

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
      />
      <ConnectedRouter history={history}>
        <Switch>
          <Routes />
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

export default App
