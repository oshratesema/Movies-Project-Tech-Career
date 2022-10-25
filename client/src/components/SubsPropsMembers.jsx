import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSubComp from "./AddSubComp";

export default function SubsPropsMembers({ memberID }) {  
  // console.log(memberID);
  const [data, setData] = useState({ data: "" });
  const [movieObj, setMovieObj] = useState([]);
  const [showSubs, setShowSubs] = useState(false);
  const [movies, setMovies] = useState([])
  const [subscription, setSubscription] = useState([])

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };    

  const getSubs = async () => {
    const response = await axios.get("http://localhost:7000/subscription");
    setSubscription(response.data);
  };    

    
  const dataSubs =  () => {
    const filteredSubs = subscription.find((sub) => sub.memberID == memberID);
    if (filteredSubs != undefined) {
      setData(filteredSubs);
      const movieName = movies.filter((movie) => movie._id == filteredSubs.movieID);
      setMovieObj(movieName);
    }
  };      
            
  // console.log(movieObj);       
  useEffect(() => {
    dataSubs()
    getSubs()
    getMovies()
  }, []);
    
  return (
    <div>
      <ul>
          {movieObj.map((movie) => {
            return(
        <li key={movie.id}>
            <Link to={`/MoviePage`}>{movie.name}</Link> 
            {data.date}
        </li>          
            )     
          })}           
      </ul>
      <button onClick={() => setShowSubs(!showSubs)}>
        subscribe to new movie
      </button>   
      {showSubs ? <AddSubComp memberID={data.memberID} /> : null}
    </div>
  );
}
               