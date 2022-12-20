const Weather = ({ weather }) => {
    return (
        <>
            <h1>Weather in {weather.name}</h1>
            <p>temperature {weather.main.temp} Celcius</p>
            <p>wind {weather.wind.speed} m/s</p>
        </>
    )
}

export default Weather