import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Country from './pages/country/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/country:name" component={Country} />
  </Switch>
)

export default Routes
