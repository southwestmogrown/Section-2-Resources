import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing/Landing";
import Feed from "./components/Feed/Feed";
import Layout from "./components/Layout/Layout";
import seedData, { users } from "../seed-data";
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
        element: <Feed postData={seedData} />,
      },
      {
        path: "posts/:postId",
        element: <PostDetails postData={seedData} />,
      },
      {
        path: "new",
        element: <PostForm users={users} postData={seedData} />,
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