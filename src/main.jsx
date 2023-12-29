import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from '../src/components/Home.jsx';
import Teachers from './components/Admin/Teachers.jsx'
import Admin from "./components/Admin/admin.jsx"
import Students from "./components/Students/students.jsx"
import Users from './components/Admin/users.jsx'
import TeacherList from './components/Teachers/Teachers.jsx'
import Salaryportal from './components/Salary/salaryportal.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path="/teacher" element={<TeacherList/>}/>
      <Route path="/student" element={<Students/>}/>
      <Route path="/salary" element={<Salaryportal/>}/>

      <Route path="/admin" element={<Admin/>}/>
      <Route exact path="/admin/user" element={<Users/>}/>
      <Route exact path="/admin/teacher" element={<Teachers/>}/>


    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
