import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav>
      {user ? (
        <>
          <span>Hello, {user.username}</span>
          <button onClick={() => {
            logout();
            navigate("/login")
          }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )
    }
    </nav>
  )
}

export default Navbar
