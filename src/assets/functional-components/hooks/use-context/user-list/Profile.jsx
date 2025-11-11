import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { IoPersonCircle } from "react-icons/io5";

const Profile = () => {
    const {users,setUsers} = useContext(UserContext);

    const changeName = () => {
        setUsers((prev)=>({...prev,name:"Shilpa"}));
    }
  return (
    <div>
      <h2><IoPersonCircle />Profile</h2>
      <p>Name:{users.name}</p>
      <p>Age:{users.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}



export default Profile
