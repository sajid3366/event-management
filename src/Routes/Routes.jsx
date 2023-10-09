import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ErrorPage from "../ErrorPage/ErrorPage";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blog/Blogs";
import OurDeals from "../Pages/OurDeals/OurDeals";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>,
                loader: ()=>fetch('/blog.json')
            },
            {
                path:'/deals',
                element: <PrivateRoute><OurDeals></OurDeals></PrivateRoute>,
                loader:()=>fetch("/deals.json")
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }


        ]
    }
])

export default router;
