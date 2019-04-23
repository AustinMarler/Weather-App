import store from '../store'
import axios from 'axios'

export function getData() {
  axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5506956&APPID=9c0cbad266eb09f701489ce45d05fb40&units=imperial").then(resp => {
    store.dispatch({
      type: "GET_WEATHER_DATA",
      data: resp.data
    })
  })
}