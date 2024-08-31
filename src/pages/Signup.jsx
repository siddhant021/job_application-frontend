import React, { useEffect } from 'react';
import { useFileHandler, useInputValidation } from "6pp";
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'
const Signup = () => {
  const navigate = useNavigate();
  const name = useInputValidation("");
  const email = useInputValidation("");
  const mobile = useInputValidation("");
  const password = useInputValidation("");
  const linkdin = useInputValidation("");
  const experience = useInputValidation("");
  const resume = useFileHandler("single");

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append("resume", resume.file);
      formData.append("name", name.value);
      formData.append("email", email.value);
      formData.append("mobile", mobile.value);
      formData.append("linkdin", linkdin.value);
      formData.append("password", password.value);
      formData.append("experience", experience.value);
      const result = await axios.post(' http://localhost:3000/register', formData);
      if (result.data.message == 'Already Applied') {
        toast.error(result.data.message, {
          autoClose: 1000,
          position: "top-center",
        });
      }
      else {
        toast.success(result.data.message, {
          autoClose: 1000,
          position: "top-center",
        });
        name.clear()
        email.clear()
        mobile.clear()
        experience.clear()
        linkdin.clear()
        password.clear();
      }
    } catch (error) {

      toast.error("Internal Server Error", {
        autoClose: 1000,
        position: "top-center",
      });

    }
  };

  return (
    <div className='main-box'>
      <h1>Job Application Form</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name.value} onChange={name.changeHandler} placeholder="Name" required />
        <input type="email" name="email" value={email.value} onChange={email.changeHandler} placeholder="Email" required />
        <input type="password" name="password" value={password.value} onChange={password.changeHandler} placeholder="Password" required />
        <input type="tel" name="mobile" value={mobile.value} onChange={mobile.changeHandler} placeholder="Mobile" />
        <input type="url" name="linkdin" value={linkdin.value} onChange={linkdin.changeHandler} placeholder="Linkdin" />
        <input type="text" name="experience" value={experience.value} onChange={experience.changeHandler} placeholder="Experience(years)" />
        <input type="file" name="resume" onChange={resume.changeHandler} required />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit">Apply</button>
          <button type="button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
