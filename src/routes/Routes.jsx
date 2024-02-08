import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import MovieDetails from "../components/MovieDetails/MovieDetails";


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

    }
]);

export default router;
