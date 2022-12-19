import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
    })
  }
  console.log("penorsh",countriesToShow)

  useEffect(hook, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  return (
    <>
      <Search search={search} onChange={handleSearch} />
      <Countries countries={countriesToShow} />
    </>
  )
}

export default App