import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Settings from './views/settings'
import Benchmarks from './views/benchmarks'
import Home from './views/home'
import LivePreview from './views/live-preview'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Settings} exact path="/settings" />
        <Route component={Benchmarks} exact path="/benchmarks" />
        <Route component={Home} exact path="/" />
        <Route component={LivePreview} exact path="/live-preview" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
