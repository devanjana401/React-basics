import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {login, user} = useContext(AuthContext);
    const navigate = useNavigate();    //used to redirect the home page when logged

    //already user exists,direct to home page
    if(user) 
        return <Navigate to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(username, password);
        if(success){
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        <br /><br />
        <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <br /><br />
        <button type="submit">Login</button>
    </form>
  )
}

export default Register
