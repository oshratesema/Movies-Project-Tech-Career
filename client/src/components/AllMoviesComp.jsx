import React,{ useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function AllMoviesPage() {
  
  const {username} = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <div className="bg-dark justify-content-center align-items-center mt-5">
      <div className="d-flex flex-wrap">
        {movies?.map((movie) => {
          return (
            <div className="col-3 d-flex flex-column justify-content-center align-items-center mb-5 text-white" key={movie.id}>
              <img src={movie.image} alt="" />
              <h4>{movie.name}</h4>
              <h5>{movie.yearPremiered}</h5>
              <div className="d-flex">
              <button onClick={() => navigate(`/EditMovieComp/${movie.name}`)} className="btn border-white text-white me-3">Edit</button>
              <button className="btn border-white text-white">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
