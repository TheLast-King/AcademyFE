import React, { useState } from 'react';
import Config from "../config/config.js";
import axios from "axios";
import { FaRegWindowClose } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen);
  }

  const handleSignout = async () => {
    try {
        const token = localStorage.getItem('token');

        if (token) {
            await axios.post(`${Config.baseurl}/${Config.urls.signout}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('token');
            
            window.location.href = '/';
        } else {
            console.log('Token not found in localStorage');
            window.location.href = '/';

        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};


  return (
<div>{ isOpen === false ? <div className="min-h-screen flex flex-row ">
  <div className="flex flex-col w-56  rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
      <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
     <button onClick={handleClick}> <FaRegWindowClose className="m-2" size={20} /> </button>

      {/* <button className='ml-2' onClick={handleClick}> Close</button> */}
    </div>
    <ul className="flex flex-col py-4">
      <li>
        <a href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
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
        <a href="/salary" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
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
      <div className='flex m-12'>
       <button className="p-2 bg-green-200 rounded-md" onClick={handleSignout}> Signout </button>
       </div>
      </li>
     
      
    </ul>
  </div>
</div> : <div className='flex flex-row w-8 m-2 p-2'>
<button onClick={handleClick}>
<MdMenuOpen size={30}/> 
</button>
</div>}

</div>
  );
};

export default Sidebar;
