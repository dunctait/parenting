import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./pages/Root.jsx";
import NotFound from "./pages/NotFound.jsx";
import ROUTES from "./routes.jsx";

function App() {
    const router = createBrowserRouter([
        {
            // The path should be "/" since basename is handled separately
            path: "/",
            element: <Root />,
            errorElement: <NotFound />,
            children: ROUTES
        }
    ], {
        basename: '/parenting'
    })

    return <RouterProvider router={router} />;
}

export default App;
