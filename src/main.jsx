import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./routes/Posts.jsx";
import { loader as postsLoader } from "./routes/Posts.loader.js";
import "./index.css";
import { action as newPostAction } from "./routes/NewPost.action.js";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails from "./routes/PostDetails.jsx";
import { loader as postDetailsLoader } from "./routes/PostDetails.loader.js";
import { action as postDetailsAction } from "./routes/PostDetails.action.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost />,
                        action: newPostAction,
                    },
                    {
                        path: "/:id",
                        element: <PostDetails />,
                        loader: postDetailsLoader,
                        action: postDetailsAction,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
