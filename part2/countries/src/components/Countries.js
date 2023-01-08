import Country from './Country'

const CountryList = ({ countries, onClick}) => {
    return (
        <div>
            {countries.map((country, i) =>
                <p key={i}> {country.name.common} <input type="button" value="show" name={country.name.common} onClick={onClick}></input></p>
            )}
        </div>
    )
}

const Countries = ({ countries, onClick }) => {
    switch(true) {
        case (countries.length > 10):
            return (<p>Too many matches, specify another filter</p>)
        case ((countries.length >= 2 && countries.length <= 10) || countries.length === 0):
            return (<CountryList countries={countries} onClick={onClick} />)
        default:
            return (<Country country={countries[0]} />)
    }
}

export default Countries