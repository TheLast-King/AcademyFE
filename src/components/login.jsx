import { useState } from 'react';
import configURLS from '../config/config';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Config from '../config/config';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
  
    try {
      const res = await axios.post(`${Config.baseurl}/${Config.urls.login}`, formData);
      const { token } = res.data; // Assuming the token is returned in the response
      console.log(token)
  
      // const data = await response.json();
  
      if (token) {
        console.log('Login successful!');
        localStorage.setItem('token', token); // Save the token in localStorage

        // Decode the token to access its payload
        const decodedToken = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);

        window.location.href = '/home';
      } else {
        console.log('Password failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-2xl font-bold mb-2">
            USERNAME
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-2xl font-bold mb-2">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
