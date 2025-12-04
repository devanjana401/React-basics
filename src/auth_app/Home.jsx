import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import ShopApp from "../shopcart-with-redux/ShopApp"

function Home() {
  const {user} = useContext(AuthContext);

  return (
    <div>
      <div>
        <h2>Welcome, {user ?.username}</h2>
        <p>This is your home page</p>
      </div>

      <div style={{marginTop:'20px',height:'90vh'}}>
        <ShopApp/>
      </div>
    </div>
  )
}

export default Home
