import Weather from './Weather'

const Button = (props) => (
    <button onClick={props.onButtonClick}>
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

const Country = ({ countries }, props) => {
    return (
        <div>
            {countries.map(country =>
                <p key={country.name.common}>{country.name.common} <Button onButtonClick={props.onButtonClick} /></p>
            )}
        </div>
    )
}

const Countries = ({ countries, weather }, props) => {
    switch(true) {
        case (countries.length >= 10):
            return (<p>Too many matches, specify another filter</p>)
        case (countries.length === 1):
            return (<CountryProfile countries={countries} weather={weather} />)
        default:
            return (<Country countries={countries} onButtonClick={props.onButtonClick} />)
    }
}

export default Countries