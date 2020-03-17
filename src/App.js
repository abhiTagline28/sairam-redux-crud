import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux'
import SignUp from './components/SignUp';
import UserList from './components/UserList.component';
import signUpFields from './redux/constants/signUpFields';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SignUp formAttributes={signUpFields} />
        <br />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
