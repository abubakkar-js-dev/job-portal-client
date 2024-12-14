import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    company,
    salaryRange: { min, max, currency },
    company_logo,
  } = job;

  return (
    <div className="p-4 border rounded-lg shadow-md flex items-center gap-4">
      <img
        src={company_logo}
        alt={`${company} logo`}
        className="w-16 h-16 rounded-full"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{company}</p>
        <p>{location}</p>
        <p>{jobType}</p>
        <p>
          Salary: {min}-{max} {currency.toUpperCase()}
        </p>
      </div>
      <Link to={`/jobs/${job._id}`}>
        <button className="btn btn-outline">Apply Now</button>
      </Link>
    </div>
  );
};

export default HotJobCard;
