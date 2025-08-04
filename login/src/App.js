import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <h1>React Contact Cards</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
