import React, { useState } from 'react';

const FormComponent = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        if(!email.includes('@')) {
            return setError('Invalid Email');
        } else {
            setEmail('');
        }
    };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault}>
        <input 
            type="text"
            value= {email}
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validate}
        />
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default FormComponent;
