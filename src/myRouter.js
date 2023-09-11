import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import SingleBookPage from "./pages/SingleBookPage";
// import NotFound from "./pages/notFound";
// import { Navigate } from "react-router-dom";

const msRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //     path: "/books",
    //     element: <SingleBookPage />,
    // },
    {
        path: "/books/:id",
        element: <SingleBookPage />,
    },
    // {
    //     path: "/notfound",
    //     element: <NotFound />,
    // },
    // {
    //     path: "*",
    //     element: <Navigate to="/notfound" replace />,
    // },
]);
export default function MyRouter() {
    return (
        <RouterProvider router={msRouter} />
    )
}