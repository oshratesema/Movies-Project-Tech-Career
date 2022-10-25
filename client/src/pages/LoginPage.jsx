import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BsFacebook} from "react-icons/bs";
import {BsWalletFill} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import WrongPassComp from "../fetchers/WrongPassComp";
import '../styleComp/style.css'

export default function LoginPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false)

  const getUsers = async () => {
    const res = await axios.get("http://localhost:7000/users");
    setUsers(res.data);
  };

  const handleInput = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  console.log(userDetails);

  const handleSubmit = () => {
    users.map((user) => {
      console.log(user);
      if (
        user.username == userDetails.username &&
        user.password == userDetails.password
      ) {

        navigate(`/MainPage/${user.username}`);
      } else { 
        setShowPopup(!showPopup)
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);
  

return(
<section className="login-page">
  {/* <!-- Jumbotron --> */}
  <div className="px-4 py-5 px-md-5 text-center text-lg-start">
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight text-white">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>
          <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5 d-flex flex-column justify-content-center">
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" className="form-control" onChange={handleInput} name="username"/>
                  <label className="form-label" htmlFor="form3Example3">User Name</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" onChange={handleInput} name="password"/>
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
                  <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                {showPopup == true? <WrongPassComp/> : null}
                {/* <!-- Submit button --> */}
                <button className="btn btn-primary  btn-block mb-4" onClick={() => handleSubmit()}>
                  Log in
                </button>
                {/* <button className="btn btn-primary  btn-block mb-4" onClick={() => handleSubmit()}>
                  Sign up
                </button> */}

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsFacebook/>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsWalletFill/>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsTwitter/>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsGithub/>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
