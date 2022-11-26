import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
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
        ]
    }
])

export default router;