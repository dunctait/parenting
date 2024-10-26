import MarkdownRenderer from "./components/MarkdownRenderer.jsx";
import home from "./pages/md/home.md?raw";
import concepts from "./pages/md/concepts.md?raw";
import React from "react";

const ROUTES = [
    {
        // Index route - leave path empty
        index: true,
        element: <MarkdownRenderer content={home} />,
    },
    {
        path: 'concepts',
        element: <MarkdownRenderer content={concepts} />,
    }
];

export default ROUTES;
