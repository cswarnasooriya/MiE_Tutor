import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


const DeleteCourse = () => {
  const navigate = useNavigate();
    const {id} = useParams()


  useEffect(() => {
    axios.delete('http://localhost:4008/course/course/'+ id)
    .then(res => {
        if(res.data.deleted){
            navigate('/courses')
        }
    }).catch(err => console.log(err))
  },[])
}

export default DeleteCourse
