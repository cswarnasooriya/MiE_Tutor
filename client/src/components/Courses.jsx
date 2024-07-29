import axios from "axios";
import { useEffect, useState } from "react"
import CourseCart from "./CourseCart";


const Courses = () => {

    const [courses, setCourses] = useState([]);

      useEffect(()=> {
        axios.get('http://localhost:4008/course/courses')
          .then(res => {
            setCourses(res.data)
            console.log(res.data)
          }).catch(err => console.log(err))
        
      }, [])
    

  return (
    <div className="course-list">
      {
        
        courses.map(course => {
          return <CourseCart key={course.id} course={course}/>

      })}
      
    </div>
  )
}

export default Courses
