import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">List of Users</h1>
      <ul className="user-list">
        {listOfUsers.map(user => (
          <li className="user-list-item" key={user.id}>
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
