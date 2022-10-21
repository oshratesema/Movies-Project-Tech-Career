import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:7000/users");
    setUsers(res.data);
  };

  const handleInput = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    users.map((user) => {
      console.log(user);
      if (
        user.username == userDetails.username &&
        user.password == userDetails.password
      ) {
        navigate(`/MainPage/${user.username}`);
      } else {
        console.log("no");
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <div className="d-flex flex-column align-items-center col-12">
      <h1 className="my-5">Movies Library</h1>
      <div>
      <div className="d-flex flex-column  col-12">
        username:
        <input className="btn bg-dark mb-5" type="text" name="username" onChange={(e) => handleInput(e)} />
        password:
        <input className="btn bg-dark mb-5" type="text" name="password" onChange={(e) => handleInput(e)} />
        <button className="btn bg-danger" onClick={() => handleSubmit()}>Login</button>
      </div>
      </div>
    </div>
  );
}
