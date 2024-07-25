import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Courses from './components/Courses'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
import { useEffect, useState } from 'react'
import Logout from './components/Logout'
import axios from 'axios'


function App() {
  const [role, setRole] = useState("")
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:4008/auth/verify')
    .then(res => {
      if(res.data.login){
        setRole(res.data.role)
      }else{
        setRole('')
      }
      console.log(res)
     
    }).catch(err => console.log(err))
    },[])

  return (
    <>
    

    <BrowserRouter>
      <Navbar role= {role} />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/login' element={<Login setRoleVar = {setRole} />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/logout' element={<Logout setRole= {setRole} />}/>

      </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App