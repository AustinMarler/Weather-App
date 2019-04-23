import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

// api.openweathermap.org/data/2.5/forecast?id=5506956&APPID=9c0cbad266eb09f701489ce45d05fb40

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
