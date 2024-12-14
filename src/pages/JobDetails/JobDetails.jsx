import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange: { min, max, currency },
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
  } = job;

  return (
    <div className="p-4 border rounded-lg shadow-md container mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p>
          <strong>Company:</strong> {company}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Job Type:</strong> {jobType}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Application Deadline:</strong> {applicationDeadline}
        </p>
        <p>
          <strong>Salary:</strong> {min}-{max} {currency.toUpperCase()}
        </p>
        <p className="mt-2">{description}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">Requirements</h2>
        <ul className="list-disc ml-5">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-4">Responsibilities</h2>
        <ul className="list-disc ml-5">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-4">Contact HR</h2>
        <p>
          <strong>Name:</strong> {hr_name}
        </p>
        <p>
          <strong>Email:</strong> {hr_email}
        </p>
      </div>
      <Link to={`/apply-job/${job._id}`}>
        <button className="btn btn-primary mt-5">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
