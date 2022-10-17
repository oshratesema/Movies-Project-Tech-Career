import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function MoviesPage() {
  const {username} = useParams();
  const navigate = useNavigate()

  return (
    <div>
      <h1>MoviesPage</h1>
      <button onClick={() => navigate(`/AllMovies`)}>All Movies</button>
      <button>Add movie</button>
    </div>
  )
}
