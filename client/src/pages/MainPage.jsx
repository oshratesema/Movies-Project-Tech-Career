import React from 'react'
import { useParams } from 'react-router-dom';
import LoginPage from './LoginPage';
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const {username} = useParams();
  const navigate = useNavigate();

  console.log(username);
  return (
    <div>
      <h1>Movies - subscription Website</h1>
      <button onClick={()=>navigate(`/AllMoviesComp/${username}}`)}>Movies</button>
      <button onClick={()=>navigate(`/SubsPage/${username}}`)}>Subscription</button>
      <button>User Management</button>
      <button>Log Out</button>
    </div>
    
  )
}
