import React, { useEffect, useState } from 'react';
import axios from 'axios';
import configURLS from '../../config/config';
import Sidebar from '../sidebar';

const Teachers = () => {
  const [users, setUsers] = useState([]);
  const options = ['Option 1', 'Select 2', 'Select 3', 'Select 4'];

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

  return (
    <div className='flex flex-row'>
      <div className='mr-2'><Sidebar/></div>
      <div className='flex flex-col '>
        <div className='flex-row m-4'>
          <label htmlFor="teachers" className="mr-4 text-4xl">Teachers:</label>
          <select id="teachers" className="w-24 m-4 border-solid border-2 border-indigo-600 rounded-lg">
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>

        <div className='flex-row m-2 p-2'>
          {users.map((user, index) => ( 
            <div key={index} className='flex justify-center items-center'>
              <div>
                <h3>{user.username}</h3>
                <p>Subject: {user.subject}</p>
                <p>Schedule: {user.schedule}</p>
                <p>Timing: {user.timing}</p>
                <p>Attendance: {user.attendance}</p>
                <p>Number of Students: {user.students}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
