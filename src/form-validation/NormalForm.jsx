import React, {useState } from 'react'
import './form.css';

const NormalForm = () => {

    const [formData,SetFormData] = useState({
        name:'',
        email:'',
        age:'',
        password:'',
        confirmPassword:'',
        gender:'',
    })
    const [errors,setErrors] = useState({});

    const handleChange = (e) =>{
        const {name,value} = e.target;
        SetFormData(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const validation = () =>{
        const newErrors = {};
        const {name,email,age,password,confirmPassword,gender} = formData;

        if(!name.trim()) newErrors.name = "Name is required....!";

        if(!email) newErrors.email = "Email is required";
        else if((!/^\S+@\S+\.\S+$/.test(email))) newErrors.email = "Email is invalid";

        if(!age) newErrors.age = "Age is required";
        else if(isNaN(age) || age<1 || age>120) newErrors.age = "Age must be between 1 and 120";

        if(!password) newErrors.password = "Password is required";
        else if(password.length < 6) newErrors.password = "Password must be atleast 6 characters"

        if(!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if(password !== confirmPassword) newErrors.confirmPassword = "Password do not match";

        if(!gender) newErrors.gender = "Gender is required"

        return newErrors;

    }

  return (
    <form>
        {/* name */}
        <div>
            <input
                type="text" 
                name='name'
                value={formData.name}
                placeholder='Name'
                onChange={handleChange}
            />
        </div>
        {/* email */}
        <div>
            <input
                type="email" 
                name='email'
                value={formData.email}
                placeholder='Email'
                onChange={handleChange}
            />
        </div>
        {/* age */}
        <div>
            <input
                type="text" 
                name='age'
                value={formData.age}
                placeholder='Age'
                onChange={handleChange}
            />
        </div>
        {/* password */}
        <div>
            <input
                type="password" 
                name='password'
                value={formData.password}
                placeholder='Password'
                onChange={handleChange}
            />
        </div>
        {/* confirm password */}
        <div>
            <input
                type="password" 
                name='confirmPassword'
                value={formData.confirmPassword}
                placeholder='Confirm Password'
                onChange={handleChange}
            />
        </div>
        {/* gender */}
        <div>
            {/* male */}
            <label>
                <input 
                    type="radio"
                    name='gender'
                    value="male"
                    onChange={handleChange}
                    checked={formData.gender === "male"}
                />
                Male
            </label>
            {/* female */}
            <label>
                <input 
                    type="radio"
                    name='gender'
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === "female"}
                />
                Female
            </label>
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default NormalForm
