import React, {useState} from 'react'
import Sidebar from '../sidebar'

const Users = () => {

    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        userType: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, like sending data to an API or performing further actions
        console.log('Form submitted with data:', formData);
      };

  return (
    <div className='flex flex-row'>
        <div><Sidebar/></div>
        



        <div className="w-full m-4 rounded-lg ">
      <h2 className="text-2xl mb-4 text-center">User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-2xl text-gray-700 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex  mb-4">
        <div className='flex-row mr-4'>
          <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-40  px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          </div>
          <div className='flex-row  mr-4'>
            <label htmlFor="userType" className="block text-gray-700 font-semibold mb-2">
            User Type
          </label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-40 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
          </div>
          <div className='flex-row  mr-4'>
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          </div>
        </div>
        <div className="mb-4">
        
        </div>
        <div className="mb-4">
      
        </div>
        <div className="flex justify-start text-center mr-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>





    </div>
  )
}

export default Users