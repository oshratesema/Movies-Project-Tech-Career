import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditMovieComp() {
  const { name } = useParams();
  const [value, setValue] = useState({})

  const handleInput = (e) => {
   setValue({...value, [e.target.name]: e.target.value})
  }

  console.log(value);

  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <h3 className="mt-4">Edit Movie: {name}</h3>
      <div className="d-flex flex-column p-5">
        name: <input className="mb-4" onChange={(e) => handleInput(e)}  type="text" name="name" />
        genres: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="genres" />
        img url: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="img" />
        premiere: <input className="mb-4" onChange={(e) => handleInput(e)} type="text" name="premiere" />
      </div>
    </div>
  );
}
