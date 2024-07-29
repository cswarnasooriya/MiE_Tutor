import { Link } from 'react-router-dom';
import '../CSS/Book.css';

const CourseCart = ({course}) => {

    const {name, instructor, imageUrl, _id} = course;

  return (
    <div className="course-card">
        <img src={imageUrl} alt={name} className="course-image" />

        <div className="course-details">
            <h3>{name}</h3>
            <p>{instructor}</p>
        </div>

        <div className="course-actions">
            <button><Link to={`/course/${course._id}`}>Edit</Link></button>
            <button>Delete</button>
        </div>
       

      
    </div>
  )
}

export default CourseCart
