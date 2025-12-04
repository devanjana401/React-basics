import React from 'react'
import { AuthProvider } from './AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import Home from './Home'

function AuthApp() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <div>
                <Navbar/>

                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default AuthApp
