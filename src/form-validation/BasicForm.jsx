import React, { useState } from 'react'

const BasicForm = () => { 
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!email){
            setError("Email is required");
        }
        else if((!/^\S+@\S+\.\S+$/.test(email))){
            setError("Invalid Email")
        }
        else{
            setEmail('');
            setError('');
            alert("Form submitted ")
            console.log('form',email);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="email"
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}             // onChange -- it is a react event for typing in input field
        />
        <br />
        {error && <p style={{color:'red'}}>{error}</p>}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default BasicForm
