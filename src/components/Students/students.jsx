import React, { useEffect, useState } from 'react';
import axios from 'axios';
import configURLS from '../../config/config';
import Sidebar from '../sidebar';

const Students = () => {
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All'); // State to manage selected option

  const options = ['All', 'John Doe', 'Jane Smith']; // Updated options array

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dummy data for teachers
        const dummyTeachers = [
          {
            username: 'John Doe',
            subject: 'Mathematics',
            schedule: 'Mon, Wed, Fri',
            timing: '9:00 AM - 11:00 AM',
            attendance: 20,
            students: 30,
          },
          {
            username: 'Jane Smith',
            subject: 'Science',
            schedule: 'Tue, Thu',
            timing: '10:00 AM - 12:00 PM',
            attendance: 18,
            students: 25,
          },
          // Add more teachers as needed...
        ];

        // Setting dummy data to state
        setUsers(dummyTeachers);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Filter users based on the selected option
  const filteredUsers = selectedOption === 'All' ? users : users.filter(user => user.username === selectedOption);

  return (
    <div className='flex flex-row'>
      <div className='mr-2'><Sidebar /></div>
      <div className='flex flex-col '>
        <div className='flex-row m-4'>
          <label htmlFor="teachers" className="mr-4 text-4xl">Students:</label>
          <select id="teachers" className="w-24 m-4 border-solid border-2 border-indigo-600 rounded-lg" onChange={handleOptionChange} value={selectedOption}>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-row m-2 p-2'>
          {filteredUsers.map((user, index) => (
            <div key={index} className='m-2 p-2 border-solid border-2 border-indigo-600 rounded-lg justify-center items-center'>
              <div>
                <div className='text-3xl'>{user.username}</div>
                <p className='text-lg'><b>Subject:</b> {user.subject}</p>
                <p><b>Schedule:</b> {user.schedule}</p>
                <p><b>Timing:</b>  {user.timing}</p>
                <p><b>Attendance:</b> {user.attendance}</p>
                <p><b>Number of Students:</b> {user.students}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
