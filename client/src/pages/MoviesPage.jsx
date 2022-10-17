import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AddMovieComp from '../components/AddMovieComp';
import AllMoviesPage from '../components/AllMoviesComp';
import EditMovieComp from '../components/EditMovieComp';



export default function MoviesPage() {

  const [showMovies, setShowMovies] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const {username} = useParams();
  const navigate = useNavigate()

  const handleMoviesClick = (event) => {
    setShowMovies(current => !current)
  }

  const handleEditClick = (event) => {
    setShowEdit(current => !current)
  }

  return (
    <div className='bg-dark text-white d-flex flex-column align-items-center'>
      <h1 className='mt-4'>Movies Page</h1>
      <h4 className='mt-3 mb-5'>Welcome back {username}</h4>
      <div className='d-flex'>
      <button className='' onClick={() => handleMoviesClick()}>All Movies</button>
      <button onClick={() => {handleEditClick()}}>Add movie</button>
      </div>
      {showMovies && <AllMoviesPage/>}
      {showEdit && <AddMovieComp/>}
    </div>
  )
}
