import React from 'react'

const Conditional = () => {
    let isLoggedIn = false;   

  return (
    <div>
      <p>{isLoggedIn ? 
      `Welcome back!`:`please sign-in`}</p>
    </div>
  )
}

export default Conditional
