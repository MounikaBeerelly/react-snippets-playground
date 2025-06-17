// Fetch Users data using useEffect and display list
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchUsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    const fetchEmployees = () => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(res => setEmployees(res.data))
        .catch(error => console.error(error))
    };

    useEffect(() => {
        fetchEmployees();
        setLoading(false);
    }, []);

    if(loading) {
        return <p>Loading</p>
    }

  return (
    <>
      <ul>{users.map(user => 
        <li>{user.id} - {user.name}</li>
      )}</ul>
      <ol>
        {employees?.map(emp => 
            <li>{emp.username} - {emp.address.city}</li>
        )}
      </ol>
    </>
  );
}

export default FetchUsersComponent;
