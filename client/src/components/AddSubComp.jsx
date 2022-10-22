import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function AddSubComp({memberID}) {
  
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
    const movieObj = movies.find(movie => movie.name == selectedMovie)
    setMovieID(movieObj?._id )
  }       
  console.log(selectedMovie); 

  const saveObj = () => {
    const obj = {     
    movieID : movieId ,
    memberID: memberID,
    date : date
    }
    setNewSubsObj(obj)
  }

  
  const addSubs = async (obj) => {
    const response = axios.post(`http://localhost:7000/subscription`, obj);
    return response;
  }
  console.log(newSubsObj);

// console.log(movieId);
// console.log(memberID);
// console.log(date);

  useEffect(() => {
    saveObj();
    saveMovieId();
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
        <button onClick={() => {addSubs(newSubsObj)}} className="btn border border-dark ">Subscribe</button>
      </div>
    </div>
  );
}
