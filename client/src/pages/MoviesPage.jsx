import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NavBarComp from '../fetchers/NavBarComp';
import axios from 'axios';
import SubsPropsMovies from '../components/SubsPropsMovies';



export default function MoviesPage() {

  const [showMovies, setShowMovies] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const { username } = useParams();
  const navigate = useNavigate()
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [subs, setSubs] = useState([]);
  const [members, setMembers] = useState([]);
  const [filteredSub, setFilteredSub] = useState([]);

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };

  const deleteMovie = async (id) => {
    const response = await axios.delete(`http://localhost:7000/movies/${id}`);
    return response;
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    filterMovies()
    };

  const filterMovies = () => {
    if (value == "") {
      return movies;
    } else {
      const filteredMovies = movies.filter((movie) => {
        if (movie.name != undefined)
          return movie.name.toString().toLowerCase().startsWith(value.toLowerCase());
      });
      setMovies(filteredMovies)
    }
  };

  const displaySubs = async () => {
    subs.map((sub) => {
      const filterSubs = members.filter((member) => sub.memberID == member._id);
      setFilteredSub(filterSubs);
    });
  };


  useEffect(() => {
    displaySubs();
    getMovies();
  }, [value]);


  const handleMoviesClick = (event) => {
    setShowMovies(current => !current)
  }

  const handleEditClick = (event) => {
    setShowEdit(current => !current)
  }

  return (
<div>

        <NavBarComp />
    <div className='bg-dark text-white d-flex flex-column align-items-center'>
      <div className="bg-dark justify-content-center align-items-center">
        <div className="text-center mb-5">
          <input
            onChange={(e)=>handleInput(e)}
            className="text-center btn border-white px-5 text-white"
            type="text"
          />
          <button
            className="btn border-white text-white"
            onClick={() => {
              filterMovies();
            }}
          >
            Find
          </button>
        </div>
        <button onClick={() => navigate("/AddMovieComp")}>Add Movie</button>
        {/* <div className="d-flex flex-wrap">
          {movies?.map((movie) => {
            return (
              
              <div
                className="col-3 d-flex flex-column justify-content-center align-items-center mb-5 text-white"
                key={movie._id}
              >
                <img src={movie.image} alt="" />
                <h4>{movie.name}</h4>
                <h5>{movie.yearPremiered}</h5>
                <div className="d-flex">
                  <button
                    onClick={() => navigate(`/EditMovieComp/${movie._id}`)}
                    className="btn border-white text-white me-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteMovie(movie._id);
                    }}
                    className="btn border-white text-white"
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <h5>subscription watch</h5>
                  <SubsPropsMovies movieID={movie._id} />
                </div>
              </div>
            );
          })}
        </div> */}
        <div className='d-flex flex-wrap'>
          <div className='col-6'>
            
          </div>
          <div className='col-6'></div>
        </div>
      </div>
    </div>
</div>
  )
}
