import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";


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
            }
        ]
    }
]);

export default router;
