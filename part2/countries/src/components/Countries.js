import Weather from './Weather'

const Button = (props) => (
    <button onClick={props.handleClick}>
      show
    </button>
  )

const CountryProfile = ({ countries, weather }) => {
    return (
        <>
            {countries.map(country =>
                <div>
                    <h1>{country.name.common}</h1>
                    <p>capital {country.capital}</p>
                    <p>area {country.area}</p>
                    <p><strong>languages:</strong></p>
                    <ul>
                        {Object.values(country.languages).map(language =>
                            <li>{language}</li>
                        )}
                    </ul>
                    <img src={country.flags.png} alt={country.name.common}></img>
                </div>
            )}
        </>
    )
}

const Country = ({ countries }) => {
    return (
        <div>
            {countries.map(country =>
                <p key={country.name.common}>{country.name.common}</p>
            )}
        </div>
    )
}

const Countries = ({ countries, weather }) => {
    switch(true) {
        case (countries.length >= 10):
            return (<p>Too many matches, specify another filter</p>)
        case (countries.length === 1):
            return (<CountryProfile countries={countries} weather={weather} />)
        default:
            return (<Country countries={countries} />)
    }
}

export default Countries