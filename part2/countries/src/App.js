import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState('')
  const [showProfile, setShowProfile] = useState(true)

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  const countriesHook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
    })
  }
  console.log(countriesToShow)

  useEffect(countriesHook, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleButton = (event) => {
    setShowProfile(showProfile)
  }
  
  return (
    <>
      <Search search={search} onChange={handleSearch} />
      <Countries countries={countriesToShow} onButtonClick={handleButton} />
    </>
  )
}

export default App