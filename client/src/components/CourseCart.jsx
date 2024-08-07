import { Link } from 'react-router-dom';
import '../CSS/Book.css';

const CourseCart = ({course}) => {

    const {name, instructor, imageUrl} = course;

  return (
    <div className="course-card">
        <img src={imageUrl} alt={name} className="course-image" />

        <div className="course-details">
            <h3>{name}</h3>
            <p>{instructor}</p>
        </div>

        <div className="course-actions">
            <button><Link to={`/course/${course._id}`} className='btn-link'>Edit</Link></button>
            <button><Link to={`/delete/${course._id}`} className='btn-link'>Delete</Link></button>
        </div>
       

      
    </div>
  )
}

export default CourseCart
