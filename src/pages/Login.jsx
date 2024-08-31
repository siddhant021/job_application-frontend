import React, { useState } from 'react'
import '../style/Signup.css'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const result = await axios.post('http://localhost:3000/login', userData);
      toast.success(result.data.message, {
        autoClose: 1000,
        position: "bottom-center",
      });
      return navigate('/details', { state: result.data.user });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1000,
        position: "top-center",
      });
    }
  };
  return (
    <div className='main-box'>
      <h1>View Application</h1>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate('/')}>New</button>
        </div>
      </form>
    </div>
  )
}

export default Login