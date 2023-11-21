/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'


export default function AddPersonForm({ onAddPerson }) {

const [inputNewName, setInputNewName] = useState("");
const [inputNewEmail, setInputNewEmail] = useState("");
const [inputNewPostadress, setInputNewPostadress] = useState("");
const [inputNewMobil, setInputNewMobil] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputNewName.trim() !== '' && inputNewEmail.trim() !== '' && inputNewPostadress.trim() !== '' && inputNewMobil.trim() !== '') {
      onAddPerson({
        name: inputNewName,
        id: Date.now(), 
        email: inputNewEmail, 
        postadress: inputNewPostadress, 
        mobil: inputNewMobil
    })   
      
      setInputNewName('');
      setInputNewEmail('');
      setInputNewPostadress('');
      setInputNewMobil('');
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Lägg till kontakt</h2>
            <input type="text" value={inputNewName} required onChange={(e) => setInputNewName(e.target.value)}  placeholder="Namn"/><br></br>
            <input type="text" value={inputNewEmail} required onChange={(e) => setInputNewEmail(e.target.value)} placeholder="E-post"/><br></br>
            <input type="text" value={inputNewPostadress} required onChange={(e) => setInputNewPostadress(e.target.value)} placeholder="Postadress"/><br></br>
            <input type="text" value={inputNewMobil} required onChange={(e) => setInputNewMobil(e.target.value)} placeholder="Mobil"/><br></br>

            <button className="submit" type="submit">Spara</button>
        </form>
    </div>
  );
}
