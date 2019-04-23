import React, { Component } from 'react'
import DayForecast from './DayForecast'

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <DayForecast />
      </div>
    )
  }
}

export default Home