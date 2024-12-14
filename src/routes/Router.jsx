import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";

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
