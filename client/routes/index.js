import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'
import App from '../containers/App/App'
import Dial from '../containers/Dial/Dial'
import About from '../containers/About/About'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dial}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
)
