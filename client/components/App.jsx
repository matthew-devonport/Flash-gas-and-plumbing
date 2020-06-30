import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import ComingSoon from './ComingSoon'


class App extends React.Component {
 

  render () {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Home} />
         {/* <Route exact path='/gallery' component={Gallery} /> */}
        <Route exact path='/about' component={About} />
        <Route exact path='/comingsoon' component={ComingSoon} />
        </div>
      </Router>
    )
  }
}

export default App
