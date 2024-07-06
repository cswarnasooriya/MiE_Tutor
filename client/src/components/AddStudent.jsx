import '../CSS/AddStudent.css';

const AddStudent = () => {
  return (
    <div className="student-form-container">
        <form className="student-form">
            <h2>Add Student</h2>

            <div className="form-group">
                <label htmlFor="roll">Index No:</label>
                <input type="text" name="roll" id="roll" />
            </div>
            <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="form-group">
                <label htmlFor="faculty">Faculty:</label>
                <input type="text" name="faculty" id="faculty" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" />
            </div>

            <button className='btn-register' type="submit">Register</button>

        </form>
      
    </div>
  )
}

export default AddStudent
