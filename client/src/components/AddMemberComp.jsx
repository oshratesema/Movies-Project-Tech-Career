import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function AddMemberComp() {

  const navigate = useNavigate()
  const [value, setValue] = useState({fullName:'', email:'', city:''});


  const handleInput = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
   }
   
   const addMember = async (obj) => {
    const response = axios.post(`http://localhost:7000/members`, obj);
    return response;
  }


   console.log(value);
 
  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <h3 className="mt-4">Add Member</h3>
      <div className="d-flex flex-column p-5">
        Full Name : <input className="mb-4" onChange={(e) => handleInput(e)}  type="text" name="fullName" />
        User Name: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="username" />
        Email: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="email" />
        City: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="city" />
        <button onClick={() => {{addMember(value); navigate(-1) }}}>Save</button>
      </div>
    </div>
  )
}
