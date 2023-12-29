import React from 'react'
import Sidebar from '../sidebar'
import Users from './users'
import { Link } from 'react-router-dom'
import imguser from "../../assets/users/users.png"
const Admin = () => {
  return (
    <div className='flex flex-row'>
    <div>
        <Sidebar/>
        
    </div>
    <div className='flex flex-row m-4'>
    <div className='m-4'>
    <Link to="/admin/user">
      <img src={imguser} alt="Add new user" />
      <h2> Add User</h2>
    </Link>
    </div>
    <div className='m-4'>
    <Link to="/admin/teacher">
      <img src={imguser} alt="Add new user" />
      <h2> Teacher info</h2>
    </Link>
    </div>
    </div>
   
    </div>
  )
}

export default Admin