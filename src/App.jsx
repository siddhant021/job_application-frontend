import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import Signup from './pages/Signup';
const App = () => {
  return (
       <Router>
         <ToastContainer closeButton={false}/>
          <Routes>
               <Route path="/login" element={<Login/>} />
               <Route path="/" element={<Signup/>} />
               <Route path="/details" element={<Home />} />
          </Routes>
       </Router>
     
  )
}
export default App