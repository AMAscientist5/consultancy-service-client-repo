import Main from "../../Layout/Main";
import ErrorRoute from "../../Pages/404/ErrorRoute";
import AddService from "../../Pages/AddService/AddService";
import AddServiceSecond from "../../Pages/AddService/AddServiceSecond";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateReviews from "../../Pages/UpdateReviews/UpdateReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService/:id",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://aradun-visa-consultancy-service-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddServiceSecond></AddServiceSecond>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateReviews></UpdateReviews>,
        loader: ({ params }) =>
          fetch(
            `https://aradun-visa-consultancy-service-server.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://aradun-visa-consultancy-service-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/*",
        element: <ErrorRoute></ErrorRoute>,
      },
    ],
  },
]);

export default router;
