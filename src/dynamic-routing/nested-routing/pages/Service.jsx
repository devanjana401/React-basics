import React from 'react'
import './service.css'
import { MdMiscellaneousServices } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';


const Service = () => {
  return (
    <div className='services-container'>
      <h2 className='services-title'><MdMiscellaneousServices />Our Services</h2>
      <p className='services-subtitle'>Choose One</p>
      <div className='services-links'>
        <Link to="web-dev" className='service-link web'>
        Web development
        </Link>
        <Link to="app-dev" className='service-link app'>
        App development
        </Link>
        <Link to="design-dev" className='service-link design'>
        Design
        </Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Service
