import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

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
      //   {
      //     path: "/blog",
      //     element: <blog></blog>,
      //   },
      //   {
      //     path: "/login",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "/myreviews",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "/addreviews",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "/signup",
      //     element: <SignUp></SignUp>,
      //   },
    ],
  },
]);

export default router;
