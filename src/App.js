import logo from './logo.svg';
import './App.css';
import  Data  from './components/Data'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from "./components/Navbar"
import UploadData from './components/UploadData';

function App() {
  return (

    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Signup/> } />

        



<Route  path="login" element={<Login/> } />
<Route  path="data" element={ <Data/> } />
<Route  path="upload" element={ <UploadData/> } />

              

        

      </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
