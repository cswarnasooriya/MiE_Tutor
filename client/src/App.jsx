import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Courses from './components/Courses'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {


  return (
    <>
    

    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App