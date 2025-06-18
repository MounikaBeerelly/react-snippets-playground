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

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setEmployees(response.data);
            setLoading(false);
        }
        catch(error) {
            console.log('Error in fetching data', error);
            setLoading(false);
        }
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
