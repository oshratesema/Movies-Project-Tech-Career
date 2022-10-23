import React from 'react'
import { useParams } from 'react-router-dom';
import LoginPage from './LoginPage';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function MainPage() {
  const {username} = useParams();
  const navigate = useNavigate();

  console.log(username);
  return (

    <div className="menu-page d-flex flex-column align-items-center">
    <h1 className="display-2 mt-5 text-white">Welcome Back {username}</h1>
    <h1 className="display-6 text-white">start mange your business</h1>

  <div className="menu-page-container d-flex flex-wrap col-12 justify-content-between p-5">
    <div className="link-box d-flex bg-dark col-3 justify-content-center align-items-center bg-opacity-75">
      <h4 className='text-white'  onClick={()=>navigate(`/AllMoviesComp/${username}}`)}>All Movies</h4>
    </div>
    <div className="link-box d-flex bg-dark col-3 justify-content-center align-items-center bg-opacity-75">
      <h4 className='text-white'  onClick={()=>navigate(`/SubsPage/${username}}`)}>Subscription</h4>
    </div>
    <div className="link-box d-flex bg-dark col-3 justify-content-center align-items-center bg-opacity-75">
      <h4><Link to="/Purchases">User Management</Link></h4>
    </div>
  </div>
  </div>    
  )
}
