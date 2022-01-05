import React from 'react'
import { Route } from 'react-router-dom'
import IsAuth from 'src/components/IsAuth/IsAuth'

import routes from './list'

const Routes = () => (
  <>
    {routes.withoutAuth.map((page, index) => (
      <Route exact path={page.path} component={page.component} key={index} />
    ))}

    <IsAuth>
      {routes.withAuth.map((page, index) => (
        <Route exact {...page} key={index} />
      ))}
    </IsAuth>
  </>
)

export default Routes
