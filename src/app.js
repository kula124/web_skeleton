import React from 'react'
import { Helmet } from 'react-helmet'
import Favicon from 'react-favicon'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './views/home.js'
import './styles/global.scss'
import icon from '../favicon.png'

const app = () => (
  <Router>
    <Helmet>
      <title>WebSkeleton for React!</title>
    </Helmet>
    <Favicon url={icon} />
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default app
