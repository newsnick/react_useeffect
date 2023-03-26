import React, { useState, useEffect } from 'react'
import styles from './GetWeatherData.module.css'

function GetWeatherData({ location }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const FetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b58b44e728edaabf2c1359cbdfc810d3`
      )
      const json = await response.json()
      setWeather(json)
    }

    FetchWeather()
  }, [location])

  return (
    <div className={styles.weather}>
      <h4>Weather in {location}:</h4>
      {weather ? (
        <ul>
          <li>Temperature: {Math.round(weather.main.temp - 273.15)}°C</li>
          <li>Data: {weather.weather[0].description}</li>
          <li>Wind speed: {weather.wind.speed} m/s</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GetWeatherData
