import React from 'react';
import useFetch from './useFetch';

const UseFetchComponent = () => {

    const { data: users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

  return (
    <>
      <h3>Users List</h3>
      <ul>
        {users.map(user => (
            <li>{user.email} - {user.company.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UseFetchComponent;
