import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing/Landing";
import Feed from "./components/Feed/Feed";
import Layout from "./components/Layout/Layout";
import { PostDetails, PostForm } from "./components/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "posts",
        element: <Feed />,
      },
      {
        path: "posts/:postId",
        element: <PostDetails />,
      },
      {
        path: "new",
        element: <PostForm />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
