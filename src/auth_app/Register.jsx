import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();    //used to redirect the home page when logged

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = register(username, password);
        if(success){
            alert("Registration successful....Please Login");
            navigate("/login");
        }
        else{
            alert("User already exists");
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>
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
        <button type="submit">Register</button>
    </form>
  )
}

export default Register
