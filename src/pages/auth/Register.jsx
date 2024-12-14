import React, { useContext } from "react";
import registerLottieData from "../../assets/lottieFiles/register.json";
import Lottie from "react-lottie";
import AuthContext from "../../context/AuthContext/AuthContext";
import GoogleLogin from "../../shared/GoogleLogin";

const Register = () => {

    const {setUser,createUser} = useContext(AuthContext);

    const handleSubmit = e=>{
        e.preventDefault();

        const form = e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,email,password);
        // password validation
        // show password error
        createUser(email,password)
        .then(result=>{
          setUser(result.user)
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
          <Lottie options={{ animationData: registerLottieData }} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="input input-bordered"
                required
                autoComplete="name"
              />
            </div>
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
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
