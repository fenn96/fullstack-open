import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [search, setSearch] = useState('')

  const countriesHook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setAllCountries(response.data)
    })
  }

  useEffect(countriesHook, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    if (search) {
      const countriesToShow = () => allCountries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
      setCountries(countriesToShow)
    }
  }

  const handleButton = (event) => {
    const countryToShow = allCountries.filter(country => country.name.common.toLowerCase().includes(event.target.name.toLowerCase()))
    setCountries(countryToShow)
  }
  
  
  return (
    <>
      <Search search={search} onChange={handleSearch} />
      <Countries countries={countries} setCountries={setCountries} onClick={handleButton} />
    </>
  )
}

export default App