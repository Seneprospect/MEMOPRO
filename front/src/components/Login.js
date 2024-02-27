import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data);
      // Gérer le succès (redirection, mise à jour de l'état d'authentification, etc.)
    } catch (error) {
      console.error(error.response.data.message);
      // Gérer l'erreur
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
