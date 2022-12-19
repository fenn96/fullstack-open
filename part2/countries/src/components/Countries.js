const Countries = ({ countries }) => {
    switch(true) {
        case (countries.length >= 10):
            return (
                <p>Too many matches, specify another filter</p>
            )
        case (countries.length === 1):
            return (
                <>
                    {countries.map(country =>
                        <div>
                            <h1>{country.name.common}</h1>
                            <p>capital {country.capital}</p>
                            <p>area {country.area}</p>
                            <p><strong>languages:</strong></p>
                            <img src={country.flags.png} alt={country.name.common}></img>
                        </div>
                    )}
                </>
            )
        default:
            return (
                <div>
                    {countries.map(country =>
                        <p key={country.name.common}>{country.name.common}</p>
                    )}
                </div>
            )
    }
}

export default Countries