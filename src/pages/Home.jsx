import React from 'react';
import '../style/Signup.css'
import { Navigate, useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
const Home = () => {
  const location = useLocation();
  const data = location.state;
  const navigate=useNavigate()
  const handlelogout=()=>{
    toast.success("Logout Successfully", {
      autoClose: 500,
      position: "bottom-center",
    });
      navigate('/')
  }
  return (
    <div className='box'>
      <p className='item'>Name : {data.name}</p>
      <p className='item'>Email : {data.email}</p>
      <p className='item'>Experience : {data.experience}</p>
      <p className='item'>Mobile : {data.mobile}</p>
      <p className='item'>
            <a href={data.linkdin} target='_blank'>Linkdin</a>
      </p>
      <p className='item'>
            <a href={data.resume.url} target='_blank'>Resume</a>
      </p>
      <button type="button" onClick={handlelogout}>Logout</button>
    </div>
  );
}

export default Home