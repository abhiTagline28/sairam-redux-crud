import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux'
import Form from './components/form';
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        
        <Form />
      </div>
    </Provider>
  );
}

export default App;
