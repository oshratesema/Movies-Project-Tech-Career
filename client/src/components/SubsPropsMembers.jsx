import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSubComp from "./AddSubComp";

export default function SubsPropsMembers({ memberID }) {
  const [data, setData] = useState({ data: "" });
  const [name, setName] = useState({ fullName: "" });
  const [showSubs, setShowSubs] = useState(false);

  const dataSubs = async () => {
    const { data } = await axios.get("http://localhost:7000/subscription");
    const filteredSubs = data.find((subs) => subs.memberID == memberID);
    if (filteredSubs != undefined) {
      setData(filteredSubs);
      const { data: movies } = await axios.get("http://localhost:7000/movies");
      const movie = movies.find((movie) => movie._id == filteredSubs.movieID);
      setName(movie);
    }
  };

  useEffect(() => {
    dataSubs();
  }, []);

  return (
    <div>
      <ul>
        <li>
          <Link to="">{name?.name}</Link> {data.date}
        </li>
      </ul>
      <button onClick={() => setShowSubs(!showSubs)}>
        subscribe to new movie
      </button>
      {showSubs ? <AddSubComp memberID={data.memberID} /> : null}
    </div>
  );
}
