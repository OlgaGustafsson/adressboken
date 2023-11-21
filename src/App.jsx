/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import AddPersonForm from './AddPersonForm'
import Person from './Person'
import './App.css'

function App() {

  const [persons, setPersons] = useState([])


  const getPersons = () => {
    fetch("http://localhost:3000/persons")
    .then(res => res.json())
    .then(data => {
      setPersons(data)
      console.log(data);
    })
  }

  useEffect(() => {
    getPersons()
  }, [])


// === uppdatera lista med alla personer ===
  const updatePersons = (getItem) => {
    
    fetch("http://localhost:3000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      getPersons()
    })
  }


  const removePerson = (getId) => {

    fetch("http://localhost:3000/persons/" + getId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      getPersons()
    })

  }

// === redigera en person ===
const updatePerson = (getId, updatePerson) => {
  fetch("http://localhost:3000/persons/" + getId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatePerson)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    getPersons()
  })
}

  return (
    
      <div>
        <h1>ADRESSBOKEN</h1>
        <AddPersonForm onAddPerson={updatePersons} />
        
        {persons.map(person => (
          <Person key={person.id} {...person} onRemovePerson={removePerson} onUpdatePerson={updatePerson} />
        ))}
   
      </div>
    
  )
}

export default App
