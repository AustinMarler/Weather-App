import Moment from 'moment'

const initialState = {
  weatherData: []
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'GET_WEATHER_DATA':
      var day1temps = {highTemp: 0, lowTemp: 0};
      var day2temps = {highTemp: 0, lowTemp: 0};
      var day3temps = {highTemp: 0, lowTemp: 0};
      var day4temps = {highTemp: 0, lowTemp: 0};
      var day5temps = {highTemp: 0, lowTemp: 0};
      action.data.list.forEach(function(item, index) {
        if (index < 8) {
          day1temps.highTemp = day1temps.highTemp + item.main.temp_max;
          day1temps.lowTemp = day1temps.lowTemp + item.main.temp_min;
        } else if (index >= 8 && index < 16) {
          day2temps.highTemp = day2temps.highTemp + item.main.temp_max;
          day2temps.lowTemp = day2temps.lowTemp + item.main.temp_min;
        } else if (index >= 17 && index < 24) {
          day3temps.highTemp = day3temps.highTemp + item.main.temp_max;
          day3temps.lowTemp = day3temps.lowTemp + item.main.temp_min;
        } else if (index >= 25 && index < 32) {
          day4temps.highTemp = day4temps.highTemp + item.main.temp_max;
          day4temps.lowTemp = day4temps.lowTemp + item.main.temp_min;
        } else if (index >= 33 && index < 40) {
          day5temps.highTemp = day5temps.highTemp + item.main.temp_max;
          day5temps.lowTemp = day5temps.lowTemp + item.main.temp_min;
        }
      })
      day1temps.highTemp = (day1temps.highTemp / 8).toFixed(2);
      day1temps.lowTemp = (day1temps.lowTemp / 8).toFixed(2);
      day2temps.highTemp = (day2temps.highTemp / 8).toFixed(2);
      day2temps.lowTemp = (day2temps.lowTemp / 8).toFixed(2);
      day3temps.highTemp = (day3temps.highTemp / 8).toFixed(2);
      day3temps.lowTemp = (day3temps.lowTemp / 8).toFixed(2);
      day4temps.highTemp = (day4temps.highTemp / 8).toFixed(2);
      day4temps.lowTemp = (day4temps.lowTemp / 8).toFixed(2);
      day5temps.highTemp = (day5temps.highTemp / 8).toFixed(2);
      day5temps.lowTemp = (day5temps.lowTemp / 8).toFixed(2);
      return {...state, weatherData: [
        {
          description: action.data.list[4].weather[0].main,
          highTemp: day1temps.highTemp,
          lowTemp: day1temps.lowTemp,
          date: action.data.list[4].dt_txt.split(" ")[0].split("-").splice(1, 2).join("-")
        },
        {
          description: action.data.list[12].weather[0].main,
          highTemp: day2temps.highTemp,
          lowTemp: day2temps.lowTemp,
          date: action.data.list[12].dt_txt.split(" ")[0].split("-").splice(1, 2).join("-")
        },
        {
          description: action.data.list[20].weather[0].main,
          highTemp: day3temps.highTemp,
          lowTemp: day3temps.lowTemp,
          date: action.data.list[20].dt_txt.split(" ")[0].split("-").splice(1, 2).join("-")
        },
        {
          description: action.data.list[28].weather[0].main,
          highTemp: day4temps.highTemp,
          lowTemp: day4temps.lowTemp,
          date: action.data.list[28].dt_txt.split(" ")[0].split("-").splice(1, 2).join("-")
        },
        {
          description: action.data.list[36].weather[0].main,
          highTemp: day5temps.highTemp,
          lowTemp: day5temps.lowTemp,
          date: action.data.list[36].dt_txt.split(" ")[0].split("-").splice(1, 2).join("-")
        }
      ]}
    default:
      return state
  }
}