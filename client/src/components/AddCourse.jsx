import { useState } from 'react';
import '../CSS/AddStudent.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const AddCourse = () => {
    const [name, setName] = useState('');
    const [instructor, setInstructor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
 

    const navigate = useNavigate()

 
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4008/course/add",{name, imageUrl, instructor})
        .then(res => {
            console.log(res)
          
          
        })
        .catch(err => console.log(err))
  
      };
  

  return (
    <div className="student-form-container">
        <form className="student-form" onSubmit={handleSubmit}>
            <h2>Add Course</h2>

            <div className="form-group">
                <label htmlFor="name">Course Name:</label>
                <input type="text" name="name" id="name"
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="instructor">Instructor's Name:</label>
                <input type="text" name="instructor" id="instructor"
                onChange={(e) => setInstructor(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="faculty">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl"
                onChange={(e) => setImageUrl(e.target.value)} />
            </div>
        

            <button className='btn-register' type="submit">Add</button>

        </form>
      
    </div>
  )
}

export default AddCourse
