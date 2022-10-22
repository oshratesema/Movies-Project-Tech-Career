import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditMemberComp() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [value, setValue] = useState({})
  const [movies, setMovies] = useState([]);

  const handleInput = (e) => {
   setValue({...value, [e.target.name]: e.target.value})
  }

  const updateMovie = async (obj) => {
    const response = axios.put(`http://localhost:7000/movies/${id}`, obj);
    return response;
  }


  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <h3 className="mt-4">Edit Member</h3>
      <div className="d-flex flex-column p-5">
        name: <input className="mb-4" onChange={(e) => handleInput(e)}  type="text" name="name" />
        genres: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="genres" />
        img url: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="img" />
        premiere: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="premiere" />
        <button onClick={() => {updateMovie(value); }}>Save</button>
        <button onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
}
