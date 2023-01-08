const Weather = ({ weather }) => {
    const IMAGE_URL = `http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`
    return (
        <div>
            <h1>Weather in {weather.name}</h1>
            <p>temperature {weather.main.temp} Celcius</p>
            <img src={IMAGE_URL} alt={weather.weather.description} />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather