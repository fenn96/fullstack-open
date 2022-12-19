import { useState } from 'react'
import Filter from './components/Filter'
import Header from './components/Header'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const result = persons.filter(person => person.name === newName).length > 0 ? false : true;

    if (result) {
      const nameObject = { name: newName, number: newNumber, id: persons.length + 1 }
      setPersons(persons.concat(nameObject))
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
    
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    
    if (search && showAll) {
      setShowAll(!showAll)
    } else if (!search && !showAll) {
      setShowAll(showAll)
    }
  }

  return (
    <>
      <Header title="Phonebook" />
      <Filter search={search} onChange={handleSearch} />
      <Header title="add a new" />
      <PersonForm onSubmit={addPerson} name={newName} onChangeName={handleNameChange} number={newNumber} onChangeNumber={handleNumberChange} />
      <Header title="Numbers" />
      <Persons persons={personsToShow} />
    </>
  )
}

export default App