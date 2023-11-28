import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [airlineInput, setAirlineInput] = useState('');
  // Selector
  const airlineList = useSelector((store) => store.airlineList);
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
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
        <input 
          placeholder='Airline Name'
          value={airlineInput}
          onChange={(e) => setAirlineInput(e.target.value)}
          type="text"
        />
        <button>Add Airline</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Airline Name</th>
          </tr>
        </thead>
        <tbody>
          
          {airlineList.map((airline) => {
            return <tr>{airline}</tr>
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
