import React, { Fragment, useState, useEffect } from 'react';

// Components
import UserTable from './Components/UserTable';


function App() {

  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    allUsers();
  }, []);
  
  const allUsers = async() => {
    const database = await fetch("https://ry-mateify-api.herokuapp.com/users");
    const dbJSON = await database.json();
    setUsers(dbJSON);
  };
  
  return (
    <Fragment>
      <UserTable users={users}/>
    </Fragment>
  );
}

export default App;
