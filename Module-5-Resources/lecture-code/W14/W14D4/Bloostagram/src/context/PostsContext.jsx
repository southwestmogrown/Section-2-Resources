import { createContext, useContext, useState } from "react";

import seedData, { users } from "../../seed-data";

export const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export default function PostsProvider(props) {
  const [posts, setPosts] = useState(seedData);

  return (
    <PostsContext.Provider value={{ users, posts, setPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
}
