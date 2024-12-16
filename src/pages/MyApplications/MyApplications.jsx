import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
  const user = useAuth();
  const [myApplications, setMyApplications] = useState([]);
  console.log(myApplications);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/my-application/?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setMyApplications(data));
  // }, [user.email]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-application/?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setMyApplications(res.data));
  }, [user.email]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-medium">
        My Applications ({myApplications.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myApplications.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">
                        {job.location.split(",").at(-1).trim()}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.location}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
