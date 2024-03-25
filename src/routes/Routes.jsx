import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout/Layout";
import ContactUs from "../Page/ContactUs";
import DemoStepper from "../Page/DemoStepper";
import DownloadTicket from "../Page/DownloadTicket";
import GallaryPage from "../Page/GallaryPage";
import Home from "../Page/Home";
import { PremiumTicket } from "../Page/PremiumTicket";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import VerifyPhone from "../components/Authentication/VerifyPhone";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie-details",
        element: <MovieDetails />,
      },

      {
        path: "/buyTickets",
        element: <DemoStepper />,
      },

      {
        path: "/gallary",
        element: <GallaryPage />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/downloadTicket",
        element: <DownloadTicket />,
      },
      {
        path: "/premiumTicket",
        element: <PremiumTicket />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Register />,
      },
      {
        path: "/auth/verify",
        element: <VerifyPhone />,
      },
    ],
  },
]);

export default router;
