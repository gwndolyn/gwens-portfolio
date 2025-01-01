// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase-config';  // Import auth from firebase-config
import { signInWithEmailAndPassword } from 'firebase/auth';  // Import Firebase sign-in function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
    } catch (err) {
      setError(err.message);  // Show error message if login fails
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
