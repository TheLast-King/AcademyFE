import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from '../src/components/Home.jsx';
import Teachers from './components/Teachers/Teachers.jsx'
import Admin from "./components/Admin/admin.jsx"
import Students from "./components/Students/students.jsx"
import Users from './components/Admin/users.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path="/teacher" element={<Teachers/>}/>
      <Route path="/student" element={<Students/>}/>

      <Route path="/admin" element={<Admin/>}/>
      <Route exact path="/users" element={<Users/>}/>

    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
