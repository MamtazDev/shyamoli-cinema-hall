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
import GallaryPage from "../Page/GallaryPage";
import ContactUs from "../Page/ContactUs";
import DownloadTicket from "../Page/DownloadTicket";
import { PremiumTicket } from "../Page/PremiumTicket";
import DemoStepper from "../Page/DemoStepper";


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
                path: '/movie-details',
                element: <MovieDetails />
            },

            {
                path: '/buyTickets',
                element: <DemoStepper />
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
            },
            {
                path: '/premiumTicket',
                element: <PremiumTicket />
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
