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
import ContactUs from "../Page/ContactUs";
import DownloadTicket from "../Page/DownloadTicket";


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
                path: '/buyTickets',
                element: <Steppers />
            },
            {
                path: '/gallary',
                element: <GallaryPage />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/downloadTicket',
                element: <DownloadTicket />
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
