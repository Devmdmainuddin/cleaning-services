import { createBrowserRouter,} from "react-router-dom";
import Main from '../layout/Main'
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/AboutUs/About";
import Blog from "../pages/Blog/Blog";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Contact from "../pages/ContactUs/Contact";
import Login from "../pages/Authentication/Login";
import Registation from "../pages/Authentication/Registation";
import Services from "../pages/Services/Services";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/checkOut",
          element: <CheckOut />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Registation />,
        },
      ],
    },
  ]);