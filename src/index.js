import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

/** TODO: Add REDUCERS */
const airlineList = (state=[], action) => {
    if (action.type === 'ADD_NEW_AIRLINE') {
      const newAirline = action.payload;
      console.log("Successfully added newAirline to state.");
      return [...state, newAirline];
    }
    return state;
}

/** TODO: Create store */
const ourReduxStore = createStore(
    combineReducers({
      airlineList
    })
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ourReduxStore}>
        <App />
    </Provider>
);