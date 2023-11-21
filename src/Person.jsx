/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export default function Person(props) {

    const removePerson = () => {
        props.onRemovePerson(props.id)
      };

    const updatePerson = () => {
        const newName = prompt("Ange nytt namn:", props.name);
        const newEmail = prompt("Ange ny e-post:", props.email);
        const newPostadress = prompt("Ange ny postadress:", props.postadress);
        const newMobil = prompt("Ange nytt mobilnummer:", props.mobil);

        const updatedPerson = {
            id: props.id,
            name: newName,
            email:  newEmail,
            postadress: newPostadress,
            mobil: newMobil
        };
        props.onUpdatePerson(props.id, updatedPerson);
    }


  return (
    <div className='person'>
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
        <h3>{props.postadress}</h3>
        <h3>{props.mobil}</h3>

        <button className="removeBtn" onClick={removePerson}>Ta bort</button>
        <button className="updateBtn" onClick={updatePerson}>Redigera</button>

    </div>
  )
}
