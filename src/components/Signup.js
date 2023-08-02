import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp() {

  console.log(process.env.REACT_APP_API_URL)

  const [user_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]=useState("")
  const [constituency,setconstituency]=useState('')
  const [error, setError] = useState("");
   const Navigate=useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();



  console.log(user_name, email, password,constituency,role,global.PORT)


    const addUser = { user_name, constituency, email, password ,role};

    if (!user_name || !email || !password || !constituency ||!role) {
      setError("Please fill in all fields.");
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/create`, {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },

    });

    const result = await response.json()
console.log('this is the error ',result)
setError(response.msg)


    if (!result.ok) {
      // const result = await response.json();
      const errorMessage = result.errors || "An error occurred.";

      console.log('this is error of the error ', errorMessage)
      setError(errorMessage);
      console.log('this is error', errorMessage);

    } if (response.ok) {
    console.log("Fetched");

    setError("");
    setEmail("");
    setPassword("");
    setName("");
    Navigate("/login")
    setconstituency("");
    console.log("User added successfully");

    }

  };
  return (
    <>


  {error && (<div  className="alert d-absolute vh-10 vw-80 alert-danger" role="alert">{error}</div>)}

<form className="row g-3 container my-5 mx-auto border rounded " onSubmit={handleSubmit}>

<h1>SIGNUP</h1>
<div className="col-12">
    <label  className="form-label">User</label>
    <input type="text" className="form-control" value={user_name} onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>


  <div className="col-md-4">
    <label  className="form-label">constituency</label>
    <select  className="form-select" value={constituency} name="state" onChange={(e)=>setconstituency(e.target.value)}>
      <option value= "">Choose...</option>
      <option value= "Arvi">Arvi</option>
      <option value= "Ashti">Ashti</option>
      <option value= "Kanjara">Kanjara</option>
    </select>
  </div>




  <div className="col-md-4">
    <label  className="form-label">Role</label>
    <select  className="form-select" value={role} name="state" onChange={(e)=>setRole(e.target.value)}>
      <option value= "">Choose...</option>
      <option value= "Admin">Admin</option>
      <option value= "User">User</option>
      <option value= "Super Admin">Super Admin</option>
    </select>
  </div>






  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  required/>
      <label className="form-check-label" >
      I agree to All the Terms and Conditions Given By Foodie.  
      </label>
    </div>
  </div> 



  <div className="col-12">
    <button type="submit" className="btn btn-primary my-5 d-flex justify-content-center">Sign in</button>
  </div>
</form>

    </>
  )
}


export default SignUp;