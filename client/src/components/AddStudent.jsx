import { useState } from 'react';
import '../CSS/AddStudent.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const AddStudent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [index, setIndex] = useState('');
    const [faculty, setFaculty] = useState('');

    const navigate = useNavigate()

 
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4008/student/register",{username, password, faculty, index})
        .then(res => {
            if(res.data.registered){
                navigate('/dashboard')
            }
          
          
        })
        .catch(err => console.log(err))
  
      };
  

  return (
    <div className="student-form-container">
        <form className="student-form" onSubmit={handleSubmit}>
            <h2>Add Student</h2>

            <div className="form-group">
                <label htmlFor="index">Index No:</label>
                <input type="text" name="index" id="index"
                onChange={(e) => setIndex(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <input type="text" name="username" id="username"
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="faculty">Faculty:</label>
                <input type="text" name="faculty" id="faculty"
                onChange={(e) => setFaculty(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className='btn-register' type="submit">Register</button>

        </form>
      
    </div>
  )
}

export default AddStudent
