import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubsPropsMembers from "../components/SubsPropsMembers";
import AddSubComp from "../components/AddSubComp";




export default function SubsPage() {
  const navigate = useNavigate()
  const { username } = useParams();
  const [showSubs, setShowSubs] = useState(false)
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    const response = await axios.get("http://localhost:7000/members");
    setMembers(response.data);
  };
     
  const deleteMember = async (id) => {
    const response = await axios.delete(`http://localhost:7000/members/${id}`);
    return response;
  }

  // const handleSubsClick = (e) => {
  // }


  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
        <h1 className="text-center">subscription page</h1>
        <button onClick={()=>navigate('/AddMemberComp')}>Add Member</button>
      <div className="d-flex flex-wrap justify-content-center">
        {members.map((member) => {     
          return(
            <div key={member._id} className="border border-dark col-5 m-2">
              <div>
               <h2>{member.fullName}</h2>
               <h3>Email: {member.email}</h3>
               <h3>City: {member.city}</h3>
               <button onClick={()=> navigate(`/EditMemberComp/${member._id}`)}>Edit</button>
               <button onClick={()=>{deleteMember(member._id)}}>Delete</button>
              </div>
              <div className="border border-dark">
                <h1>movies watched</h1>
                <SubsPropsMembers memberID={member._id}/>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
