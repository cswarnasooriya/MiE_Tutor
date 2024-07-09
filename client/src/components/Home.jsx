import { useEffect } from 'react';
import '../CSS/Home.css';
import axios from 'axios';

const Home = ({setRole}) => {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('auth/verify')
    .then(res => {
      if(res.data.login){
        setRole(res.data.login)
      }else{
        setRole('')
      }
      console.log(res)
     
    }).catch(err => console.log(err))
    },[])

  return (
    <div className="hero">

      <div className="hero-content">
        <h1 className="hero-text">Online Courses</h1>
        <p className="hero-des">
          Browse and follow the collection of our best and modern interesting courses and lectures anywhere and any time with your favourites and so on.
        </p>
      </div>

      <div className="hero-img"></div>
      
    </div>
  )
}

export default Home
