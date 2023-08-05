import logo from './logo.svg';
import './App.css';
import  Data  from './components/Data'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from "./components/Navbar"
import UploadData from './components/UploadData';
import UserLogs from './components/UserLogs';
import { useEffect } from 'react';

function App() {

  const URL=process.env.REACT_APP_API_URL

  useEffect(()=>{
console.log("server is running on ", URL)
  },[])
  return (

    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Signup URL={URL}/> } />
        <Route  path="login" element={<Login URL={URL}/> } />
        <Route  path="data" element={ <Data URL={URL}/> } />
        <Route  path="upload" element={ <UploadData URL={URL}/> } />
        <Route  path="logs" element={ <UserLogs URL={URL}/> } />


      </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
