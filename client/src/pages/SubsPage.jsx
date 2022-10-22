import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SubsPage() {
  const { username } = useParams();
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    const response = await axios.get("http://localhost:7000/members");
    setMembers(response.data);
  };
  console.log(members);
  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
        <h1 className="text-center">subscription page</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {members.map((member) => {
          return(
            <div key={member.id} className="border border-dark col-5 m-2">
              <div>
               <h2>{member.fullName}</h2>
               <h3>{member.email}</h3>
               <h3>{member.city}</h3>
               <button>Edit</button>
               <button>Delete</button>
              </div>
              <div className="border border-dark">
                <h1>movies watched</h1>
                <button>subscribe to new movie</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
