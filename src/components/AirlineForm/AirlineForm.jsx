import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export default function AirlineForm(){
    const [airlineInput, setAirlineInput] = useState('');
    // Create a way to communicate with the store
    const dispatch = useDispatch();

    const addAirline = (event) => {
        event.preventDefault();
        console.log("Adding a new airline:", airlineInput);
        dispatch({
            type: 'ADD_NEW_AIRLINE',
            payload: airlineInput
        })
        setAirlineInput('');
    }

    return (
      <form onSubmit={addAirline}>
        <input 
          placeholder='Airline Name'
          value={airlineInput}
          onChange={(e) => setAirlineInput(e.target.value)}
          type="text"
        />
        <button>Add Airline</button>
      </form>
    );
}