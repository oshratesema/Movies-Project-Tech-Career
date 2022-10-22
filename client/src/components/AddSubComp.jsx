import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function AddSubComp({memberID}) {
  console.log(memberID);
  
  const getInitialState = () => {
    const selectedMovie = "under The Dom";
    return selectedMovie;
  };
  
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieID] = useState()
  const [selectedMovie, setSelectedMovie] = useState(getInitialState);
  const [newSubsObj, setNewSubsObj] = useState();
  const [date , setDate] = useState();

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };
  
  const handleSelect = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const saveMovieId = () => {
    const movieObj =  movies.filter(movie => movie.name == selectedMovie)
    movieObj.map((movie) => setMovieID(movie._id))
  }

  // const saveMemberId = async (memberId) => {
  //   const response = await axios.get("http://localhost:7000/member");
  //   const members =response.data;
  //   const memberObj = members.filter(member => member.) 
  // };


  const saveObj = () => {
    const obj = {
    movieID : movieId ,
    memberID: 1,
    date : date
    }
    setNewSubsObj(obj)
  }

  // const addSubs = async (obj) => {
  //   const response = axios.post(`http://localhost:7000/subscription`, obj);
  //   return response;
  // }

// console.log(movieId);
// console.log(memberID);
// console.log(date);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="col-6">
        <h6>Add new movie</h6>
        <select
          onChange={(e) => {
            handleSelect(e);
          }}
          value="selectedMovie"
          className="form-select form-select-xs mb-3"
          aria-label=".form-select-lg example"
        >
          {movies.map((movie) => {
            return (
                <option key={movie._id}>{movie.name}</option>          
            );
          })}
        </select>
        <input onChange={(e) => {handleDate(e);}} className="btn border border-dark" type="Date" />
        <button onClick={() => {saveMovieId()}} className="btn border border-dark ">Subscribe</button>
      </div>
    </div>
  );
}
