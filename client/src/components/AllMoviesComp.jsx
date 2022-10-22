import React,{ useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SubsComponent from "./SubsComponent";

export default function AllMoviesComp() {
  
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [subs, setSubs] = useState([]);
  const [members, setMembers] = useState([]);
  const [filteredSub, setFilteredSub]  = useState([])

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };

const deleteMovie = async (id) => {
  const response = await axios.delete(`http://localhost:7000/movies/${id}`);
  return response;
}

const handleInput = (e) => {
  setValue(e.target.value)
 }

const filterMovies = async () => {
  const response = await axios.get("http://localhost:7000/movies");
  if (value == ''){
    return response.data;
  }else{
    const filteredMovies = movies.filter((movie) => movie.name.startsWith(value))
    setMovies(filteredMovies)
  }
}

const getSubscription = async () => {
  const response = await axios.get("http://localhost:7000/subscription");
  setSubs(response.data);
};

const getMembers = async () => {
  const response = await axios.get("http://localhost:7000/members");
  setMembers(response.data);
};

const displaySubs = async () => {
  subs.map(sub => {
  const filterSubs = members.filter(member => sub.memberID == member._id);
  setFilteredSub(filterSubs);
})
}


console.log(subs);
console.log(members);

useEffect(() => {
    displaySubs()
    getMembers()
    getMovies()
    getSubscription()
  }, [value]);
  
  return (
    <div className="bg-dark justify-content-center align-items-center">
        <div className="text-center mb-5">
        <input onChange={(e)=> {handleInput(e)}} className="text-center btn border-white px-5" type="text"/>
        <button className="btn border-white text-white" onClick={() => {filterMovies()}}>Find</button>
        </div>
        <button onClick={()=>navigate('/AddMovieComp')}>Add Movie</button>
      <div className="d-flex flex-wrap">
        {movies?.map((movie) => {
          return (
            <div className="col-3 d-flex flex-column justify-content-center align-items-center mb-5 text-white" key={movie._id}>
              <img src={movie.image} alt="" />
              <h4>{movie.name}</h4>
              <h5>{movie.yearPremiered}</h5>
              <div className="d-flex">
              <button onClick={() => navigate(`/EditMovieComp/${movie._id}`)} className="btn border-white text-white me-3">Edit</button>
              <button onClick={() => {deleteMovie(movie._id)}} className="btn border-white text-white">Delete</button>
              </div>
              <div>
                <h5>subscription watch</h5>
                <SubsComponent movieID={movie._id}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
