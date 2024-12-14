import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { email } = useAuth();
  const { id } = useParams();

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const applicaiton = {
      job_id: id,
      applicant_email: email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(applicaiton),
    })
    .then(res=> res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch(err =>{
        console.log(err);
    })
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-284px)]">
      <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
        <form onSubmit={handleApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="text"
              name="linkedIn"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              type="text"
              name="github"
              placeholder="Github URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="text"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
