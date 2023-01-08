import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({country}) => {
    const [weather, setWeather] = useState([])

    const weatherHook = () => {
        console.log('effect')
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=d6eb4f6a8acfa06ccb310d706358da6d`)
          .then(response => {
            console.log(response)
            setWeather(response.data)
        })
    }
    useEffect(weatherHook, [country.capital])
    console.log("updated")
    console.log(country.capital)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <p><strong>languages:</strong></p>
            <ul>
                {Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>
                )}
            </ul>
            <img src={country.flags.png} alt={country.name.common}></img>
            <Weather weather={weather} />
        </div>
    )
}

export default Country