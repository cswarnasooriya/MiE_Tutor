import { useEffect, useState } from 'react';
import '../CSS/AddStudent.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'


const EditCourse = () => {
    const [name, setName] = useState('');
    const [instructor, setInstructor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate()
    const {id} = useParams();



    useEffect(() => {
      axios.get("http://localhost:4008/course/course/"+ id)
        .then(res => {
            setName(res.data.name)
            setInstructor(res.data.instructor)
            setImageUrl(res.data.imageUrl)
          
        })
        .catch(err => console.log(err))
    })



 
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4008/course/add",{name, imageUrl, instructor})
        .then(res => {
            if(res.data.added){
              navigate('/courses')
            }else{
              console.log(res)
            }
          
          
        })
        .catch(err => console.log(err))
  
      };
  

  return (
    <div className="student-form-container">
        <form className="student-form" onSubmit={handleSubmit}>
            <h2>Edit Course</h2>

            <div className="form-group">
                <label htmlFor="name">Course Name:</label>
                <input type="text" name="name" id="name" value={name}
                onChange={(e) => setName(e.target.value)} />
            </div> 

            <div className="form-group">
                <label htmlFor="instructor">Instructor Name:</label>
                <input type="text" name="instructor" id="instructor" value={instructor}
                onChange={(e) => setInstructor(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="faculty">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl" value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} />
            </div>
        

            <button className='btn-register' type="submit">Done</button>

        </form>
      
    </div>
  )
}

export default EditCourse

