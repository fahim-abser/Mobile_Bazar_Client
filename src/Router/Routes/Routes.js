import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CategoryDetails from "../../Components/CategoryDetails/CategoryDetails";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main";
import { useParams } from "react-router-dom";
import InsertProduct from "../../Components/InsertProduct/InsertProduct";
import Error from "../../Components/Error/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/category/:id',
        element: <CategoryDetails ></CategoryDetails>
      },
      {
        path: '/addProduct',
        element: <InsertProduct></InsertProduct>
      },
    ]
  }
])

export default router;