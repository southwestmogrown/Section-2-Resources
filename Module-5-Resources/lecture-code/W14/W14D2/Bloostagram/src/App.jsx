import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing/Landing";
import Feed from "./components/Feed/Feed";
import Layout from "./components/Layout/Layout";
import seedData from "../seed-data";
import { PostDetails } from "./components/Posts";
// import PurpleWrapper from "./components/PurpleWrapper";

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
        element: <Feed data={seedData} />,
      },
      {
        path: "posts/:postId",
        element: <PostDetails data={seedData} />,
      },
      {
        path: "new",
        element: <h1>New Posts coming soon!</h1>,
      },
    ],
  },
]);

function App() {
  // console.log("howdy");
  const handleClick = (e) => {
    console.log("in handle click", e);
    alert("One day this will help us make a new post...");
  };
  return (
    <>
      {/* <Link to="/posts">Posts</Link> */}
      <RouterProvider router={router} />
      {/* <h1>Welcome to Bloostagram!</h1>
      <button onClick={(e) => handleClick(e)}>New Post</button>
      <img
        className="cool-dog-pic"
        src={image}
        alt="cool doggo with headphose"
        style={{ height: "300px" }}
      /> */}
      {/* <Post data={seedData[0]} />
      <Post data={seedData[1]} />
      <PurpleWrapper>
        <Post data={seedData[2]} />
        <Post data={seedData[3]} />
      </PurpleWrapper>
      <Post data={seedData[4]} />
      <Post data={seedData[5]} /> */}
      {/* {seedData.map((post) => (
        <div key={post.id}>
          <Post data={post} />
        </div>
      ))} */}
    </>
  );
}

export default App;
