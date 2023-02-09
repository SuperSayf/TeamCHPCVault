import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Settings from './views/settings'
import Benchmarks from './views/benchmarks'
import LivePreview from './views/live-preview'
import Home from './views/home'
import HPL from './views/h-p-l'
import HPCC from './views/h-p-c-c'
import HPCG from './views/h-p-c-g'
import QE from './views/q-e'
import POT3D from './views/p-o-t3d'
import FLUTAS from './views/f-l-u-t-a-s'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Settings} exact path="/settings" />
        <Route component={Benchmarks} exact path="/benchmarks" />
        <Route component={LivePreview} exact path="/live-preview" />
        <Route component={Home} exact path="/" />
        <Route component={HPL} exact path="/h-p-l" />
        <Route component={HPCC} exact path="/h-p-c-c" />
        <Route component={HPCG} exact path="/h-p-c-g" />
        <Route component={QE} exact path="/q-e" />
        <Route component={POT3D} exact path="/p-o-t3d" />
        <Route component={FLUTAS} exact path="/f-l-u-t-a-s" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
