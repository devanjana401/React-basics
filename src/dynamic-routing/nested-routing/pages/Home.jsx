import React from 'react'
import { FaHome } from "react-icons/fa";


const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h2><FaHome />Welcome to home page</h2>
      <p>This is the homepage of our website.</p>
    </div>
  )
}

export default Home
