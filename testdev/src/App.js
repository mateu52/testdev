import './App.css';
import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';


function User({firstName, lastName, email, phone}){
  return(
    <div>
      <h2>{firstName} {lastName} </h2>
      <p>{email}, {phone}</p>
    </div>
  )
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string
}

function App() {
  const [ users, setUsers ] = useState([]);
  useEffect(()=> {
    fetch('https://randomuser.me/api?results=10')
    .then(response => response.json())
    .then(data => setUsers(data.results))
    .catch(error=> console.error(error));
  }, [])
  return (
    <div className="App">
    <Button  />
    {/*{users && users.map((user) => 
      <User key={user.login.uuid} 
        firstName={user.name.first}
        lastName={user.name.last}
        email={user.email}
        phone={user.phone}
      />
    )}
    */}
      </div>
  );
}

export default App;
