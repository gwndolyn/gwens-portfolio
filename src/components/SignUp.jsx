// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebase-config';  // Import auth from firebase-config
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Import Firebase sign up function

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User Created Successfully');
    } catch (err) {
      setError(err.message);  // Show error message if sign-up fails
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
