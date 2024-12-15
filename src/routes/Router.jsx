import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <h2>This is Error Page</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'jobs/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: 'apply-job/:id',
        element: <PrivateRoute><ApplyJob /></PrivateRoute>,
      },
      {
        path: 'my-applications',
        element: <PrivateRoute><MyApplications /></PrivateRoute>,
      },
      {
        path: 'add-job',
        element: <PrivateRoute><AddJob /></PrivateRoute>
      },
      {
        path: 'my-posted-job',
        element: <PrivateRoute><MyPostedJobs /></PrivateRoute>,
      },
      {
        path: 'viewApplications/:job_id',
        element: <PrivateRoute><ViewApplication /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: '/signIn',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <Register />
      }
    ]
  },
]);

export default router;
