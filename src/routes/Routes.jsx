import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import VerifyPhone from "../components/Authentication/VerifyPhone";
import Gallary from "../components/Home/Gallary";
import GallaryPage from "../Page/GallaryPage";
import Steppers from "../Page/Steppers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/movieDetails',
                element: <MovieDetails />
            },
            
            {
                path: '/stepper',
                element: <Steppers />
            },
            {
                path: '/gallary',
                element: <GallaryPage />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/signup',
                element: <Register />
            },
            {
                path: '/auth/verify',
                element: <VerifyPhone />
            }
        ]
    }
]);

export default router;
