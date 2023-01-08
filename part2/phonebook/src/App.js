import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import Header from './components/Header'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const result = persons.filter(person => person.name === newName).length > 0 ? false : true;

    if (result) {
      const nameObject = { name: newName, number: newNumber, id: persons.length + 1 }


      personService
        .create(nameObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(nameObject))
          setErrorMessage(`Added ${nameObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
        })
        .catch(error => {
          console.log(error)
          setErrorMessage(`Error: Unable to add ${nameObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
        })

    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const nameObject = { name: newName, number: newNumber, id: (persons.filter(person => person.name === newName)[0].id) }

        personService
        .update(nameObject)
        .then(response => {
          console.log(response)
          setPersons(persons.map(person => person.id !== nameObject.id ? person : response.data))
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
          setErrorMessage(`Updated ${nameObject.name}`)
        })
        .catch(error => {
          console.log(error)
          setErrorMessage(`Error: ${nameObject.name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
        })
      }
    }
    
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (event) => {
    event.preventDefault()
    const id = parseInt(event.target.value)
    const person = persons.find(person => person.id === id)
    console.log(person)

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(id)
        .then(response => {
          console.log(response)
          setPersons(personsToShow.map(post => post.id !== person.id ? post : response.data))
        setTimeout(() => {
          setErrorMessage(null)
          }, 4000)
        setErrorMessage(`Deleted ${person.name}`)
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(`Error: Unable to delete ${person.name} has already been removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 4000)
      })
    }
    
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
      <Notification message={errorMessage} />
      <Filter search={search} onChange={handleSearch} />
      <Header title="add a new" />
      <PersonForm onSubmit={addPerson} name={newName} onChangeName={handleNameChange} number={newNumber} onChangeNumber={handleNumberChange} />
      <Header title="Numbers" />
      {personsToShow.map(person =>
        <div>
          <Person person={person} />
          <button onClick={deletePerson} value={person.id}>delete</button>
        </div>
      )}
    </>
  )
}

export default App