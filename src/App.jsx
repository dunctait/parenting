import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./pages/Root.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/",
                    element: <div>Home!</div>,
                },
                {
                    path: "concepts",
                    element: <div>Concepts!</div>,
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
