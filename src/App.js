import React from 'react'
import CaesarPalace from './CaesarPalace'
import Canopy from './Canopy'
import Burnt from './Burnt'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={CaesarPalace} />
      <Route path='/canopy' component={Canopy} />
      <Route path='/burnt' component={Burnt} />
    </Switch>
  </BrowserRouter>
)