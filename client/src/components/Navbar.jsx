import { Link } from "react-router-dom"
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

        <div className="navbar-left">
            <Link to='/' className="navbar-logo">MiE Tutor</Link>
        </div>

        <div className="navbar-right">
            <Link to="/courses" className="navbar-link">Courses</Link>
            <Link to="/add-course" className="navbar-link">Add Course</Link>
            <Link to="/add-student" className="navbar-link">Add Student</Link>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            <Link to="/login" className="navbar-link">Login</Link>
            
        </div>

    </nav>
  )
}

export default Navbar
