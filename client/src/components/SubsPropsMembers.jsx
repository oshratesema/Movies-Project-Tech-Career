import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSubComp from "./AddSubComp";

export default function SubsPropsMembers({ memberID }) {
  const [data, setData] = useState({ data: "" });
  const [movieObj, setMovieObj] = useState({});
  const [showSubs, setShowSubs] = useState(false);
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await axios.get("http://localhost:7000/movies");
    setMovies(response.data);
  };


  const dataSubs = async () => {
    const { data } = await axios.get("http://localhost:7000/subscription");
    const filteredSubs = data.find((subs) => subs.memberID == memberID);
    if (filteredSubs != undefined) {
      setData(filteredSubs);
      const movieName = movies.find((movie) => movie._id == filteredSubs.movieID);
      setMovieObj(movieName);
    }
  };

  console.log(movieObj);
  useEffect(() => {
    dataSubs();
    getMovies()
  }, []);

  return (
    <div>
      <ul>
        <li>
          <Link to={`/MoviePage`}>{movieObj?.name}</Link> {data.date}
        </li>
      </ul>
      <button onClick={() => setShowSubs(!showSubs)}>
        subscribe to new movie
      </button>
      {showSubs ? <AddSubComp memberID={data.memberID} /> : null}
    </div>
  );
}
