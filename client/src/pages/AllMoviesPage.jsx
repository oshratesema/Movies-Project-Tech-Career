import React,{ useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import axios from "axios";


export default function AllMoviesPage() {
  
  const {username} = useParams();
  console.log(username);

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="bg-dark justify-content-center align-items-center">
      <h1>MoviesPage</h1>
      <div className="d-flex flex-wrap">
        {movies?.map((movie) => {
          console.log(movie.image);
          return (
            <div className="col-3 d-flex flex-column justify-content-center align-items-center mb-5" key={movie.id}>
              <img src={movie.image} alt="" />
              <h4>{movie.name}</h4>
              <h5>{movie.yearPremiered}</h5>
              <div className="d-flex">
              <button className="btn border-white text-white me-3">Edit</button>
              <button className="btn border-white text-white">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
