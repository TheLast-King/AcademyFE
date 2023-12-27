import React, { useState } from 'react';
import Config from "../config/config.js";
import axios from "axios";

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen);
  }

  const handleSignout = async () => {
    try {
        const token = localStorage.getItem('token');

        if (token) {
            // Make a POST request to the sign-out endpoint
            await axios.post(`${Config.baseurl}/${Config.urls.signout}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Clear token from localStorage after sign-out
            localStorage.removeItem('token');

            // Redirect or perform any other necessary action after sign-out
            // For example, redirect to the login page
            window.location.href = '/login';
        } else {
            console.log('Token not found in localStorage');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};


  return (
<div>{ isOpen === false ? <div className="min-h-screen flex flex-row bg-green-200">
  <div className="flex flex-col w-56 bg-blue-300 rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
      <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
      <button className='ml-2' onClick={handleClick}> Close</button>
    </div>
    <ul className="flex flex-col py-4">
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
          <span className="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="/teacher" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
          <span className="text-sm font-medium">Teachers</span>
        </a>
      </li>
      <li>
        <a href="/student" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
          <span className="text-sm font-medium">Students</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
          <span className="text-sm font-medium">Salary Portal</span>
        </a>
      </li>
      <li>
        <a href="/admin" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
          <span className="text-sm font-medium">Admin</span>
        </a>
      </li>
     
      <li>
       <button onClick={handleSignout}> Signout </button>
      </li>
     
      
    </ul>
  </div>
</div> : <><button onClick={handleClick}>Open SideBar</button></>}

</div>
  );
};

export default Sidebar;
