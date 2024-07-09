import { Link } from "react-router-dom"
import '../CSS/Navbar.css';

const Navbar = ({role}) => {
  return (
    <nav className="navbar">

        <div className="navbar-left">
            <Link to='/' className="navbar-logo">MiE Tutor</Link>
        </div>

        <div className="navbar-right">
            <Link to="/courses" className="navbar-link">Courses</Link>
            {role === 'admin' &&
            <>
              <Link to="/add-course" className="navbar-link">Add Course</Link>
              <Link to="/addstudent" className="navbar-link">Add Student</Link>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </>
            }

            {role === "" ? 
              <Link to="/login" className="navbar-link">Login</Link>
              : <Link to="/logout" className="navbar-link">Logout</Link>
            }
            
            
        </div>

    </nav>
  )
}

export default Navbar
