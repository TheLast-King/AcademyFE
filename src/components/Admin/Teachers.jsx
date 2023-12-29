import React, { useEffect, useState } from 'react';
import axios from 'axios';
import configURLS from '../../config/config';
import Sidebar from '../sidebar';



const Teachers = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    userType: '',
    password: '',
    subject: '',
    timings: {
      monday: { start: '', end: '' },
      tuesday: { start: '', end: '' },
      wednesday: { start: '', end: '' },
      thursday: { start: '', end: '' },
      friday: { start: '', end: '' },
      saturday: { start: '', end: '' },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimingsChange = (e, day, timeType) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      timings: {
        ...formData.timings,
        [day]: {
          ...formData.timings[day],
          [timeType]: value,
        },
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Further actions like API calls or processing the data can be performed here
  };

  return (
    <div className='flex flex-row'>
      <div>
        <Sidebar />
      </div>

      <div className="w-full m-4 rounded-lg">
        <h2 className="text-2xl mb-4 text-center">Teacher Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Existing fields */}
          {/* ... */}
          <div className="mb-4">
              <label htmlFor="name" className="block text-2xl text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          <div className="mb-4">
              <label htmlFor="subject" className="block text-2xl text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>


          <div className='flex flex-row'>
          {/* Additional fields for teachers */}
          <div className="pr-4">
           
            <div className="mb-4">
          
              {['monday', 'tuesday', 'wednesday'].map((day) => (
                <div key={day} className="mb-2">
                  <label className="text-lg font-semibold">{`${day.charAt(0).toUpperCase()}${day.slice(1)}`}</label>
                  <div className="flex">
                    <input
                      type="time"
                      id={`${day}_start`}
                      name={`${day}_start`}
                      value={formData.timings[day].start}
                      onChange={(e) => handleTimingsChange(e, day, 'start')}
                      className="w-1/8 mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Start Time"
                      required
                    />
                    <label className='flex justify-center items-center pr-2'>A.M.</label>
                    <input
                      type="time"
                      id={`${day}_end`}
                      name={`${day}_end`}
                      value={formData.timings[day].end}
                      onChange={(e) => handleTimingsChange(e, day, 'end')}
                      className="w-1/8 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="End Time"
                      required
                    />
        <label className='flex justify-center items-center pl-2'>P.M.</label>

                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pl-4">
            <div className="mb-4">
            
              {['thursday', 'friday', 'saturday'].map((day) => (
                <div key={day} className="mb-2">
                  <label className="text-lg font-semibold">{`${day.charAt(0).toUpperCase()}${day.slice(1)}`}</label>
                  <div className="flex">
                    <input
                      type="time"
                      id={`${day}_start`}
                      name={`${day}_start`}
                      value={formData.timings[day].start}
                      onChange={(e) => handleTimingsChange(e, day, 'start')}
                      className="w-1/8 mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Start Time"
                      required
                    />
                           <label className='flex justify-center items-center pr-2'>A.M.</label>

                    <input
                      type="time"
                      id={`${day}_end`}
                      name={`${day}_end`}
                      value={formData.timings[day].end}
                      onChange={(e) => handleTimingsChange(e, day, 'end')}
                      className="w-1/8 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="End Time"
                      required
                    />
                            <label className='flex justify-center items-center pl-2'>P.M.</label>

                  </div>
                </div>
              ))}
            </div>
          </div>
                </div>
          {/* Submit button */}
          <div className="w-full mt-4">
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
  );
};

export default Teachers;
