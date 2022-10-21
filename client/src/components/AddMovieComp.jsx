import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function AddMovieComp() {

  const [value, setValue] = useState({});

  const handleInput = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
   }
   
   const addMovie = async (obj) => {
    const response = axios.post(`http://localhost:7000/movies`, obj);
    return response;
  }


   console.log(value);
 
  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <h3 className="mt-4">Add Movie</h3>
      <div className="d-flex flex-column p-5">
        name: <input className="mb-4" onChange={(e) => handleInput(e)}  type="text" name="name" />
        genres: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="genres" />
        img url: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="img" />
        premiere: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="premiere" />
        <button onClick={() => {addMovie(value)}}>Save</button>
      </div>
    </div>
  )
}
