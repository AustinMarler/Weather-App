import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSnowflake, faCloudShowersHeavy, faCloud, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { getData } from '../actions/weather'
import { connect } from 'react-redux'

library.add(faSun, faSnowflake, faCloudShowersHeavy, faCloud, faTemperatureHigh, faTemperatureLow)

class DayForecast extends Component {
  componentDidMount() {
    getData()
  }

  render() {
    return (
      <div id="allForecastsContainer">
        {
          this.props.weatherData.map((item, index) => {
            return (
              <div key={"forecast" + index} className="dayForecastContainer">
                <div className="forecastDate">
                  <span>{item.date}</span>
                </div>
                <div className="forecastImageContainer">
                  <FontAwesomeIcon icon={item.description === "Clear" ? faSun : item.description === "Clouds" ? faCloud : item.description === "Rain" ?faCloudShowersHeavy : item.description === "Snow" ?faSnowflake : faSun} />
                </div>
                <div className="forecastInfoContainer">
                  <div className="highTemp">
                    <FontAwesomeIcon icon={faTemperatureHigh} /><span className="temp">{item.highTemp}&#8457;</span>
                  </div>
                  <div className="lowTemp">
                    <FontAwesomeIcon icon={faTemperatureLow} /><span className="temp">{item.lowTemp}&#8457;</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    weatherData: appState.weatherData
  }
}

export default connect(mapStateToProps)(DayForecast)