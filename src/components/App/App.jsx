import React from 'react';
import AirlineTable from '../AirlineTable/AirlineTable';
import AirlineForm from '../AirlineForm/AirlineForm';

function App() {
  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <AirlineTable/>
    </div>
  );
}

export default App;
