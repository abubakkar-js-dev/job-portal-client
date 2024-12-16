import React, { useContext } from "react";
import loginLottieData from "../../assets/lottieFiles/login.json";
import Lottie from "react-lottie";
import AuthContext from "../../context/AuthContext/AuthContext";
import GoogleLogin from "../../shared/GoogleLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const {setUser,signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state;
    console.log(from);

    const handleSubmit = e=>{
        e.preventDefault();

        const form = e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,email,password);
        // password validation
        // show password error
        signInUser(email,password)
        .then(result=>{
          setUser(result.user);
          const user = {email: result.user.email};
          axios.post('http://localhost:5000/jwt',user,{
            withCredentials: true,
          })
          .then(res=> console.log(res.data));
          // navigate(from || '/');
        })
        .catch(err=>{
          const errorMessage = err.message;
          console.log(errorMessage);
        })

    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie options={{ animationData: loginLottieData }} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="input input-bordered"
                required
                autoComplete="email"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="input input-bordered"
                required
                autoComplete="off"
              />
              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
