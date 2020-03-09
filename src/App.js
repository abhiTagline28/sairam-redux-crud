import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux'
import Form from './components/form';
import {FIRST_URL} from './redux/Routes/routesIds'
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        [FIRST_URL]
        <Form />
      </div>
    </Provider>
  );
}

export default App;
