import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [airlineInput, setAirlineInput] = useState('');
  // Selector
  const airlineList = useSelector((store) => store.airlineList);
  // Create a way to communicate with the store
  const dispatch = useDispatch();

  const addAirline = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_NEW_AIRLINE',
      payload: airlineInput
    })
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
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
