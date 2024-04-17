// import seedData from "../seed-data";

const GET_POSTS = "posts/GET_POSTS";
const ADD_POST = "posts/ADD_POST";

export const createPost = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};

export const loadPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

export const getAllPosts = () => async (dispatch) => {
  const res = await fetch("/api/posts/all");

  if (res.ok) {
    const posts = await res.json();
    // console.log(posts);
    dispatch(loadPosts(posts));
    return posts;
  } else {
    const errors = await res.json();
    console.log(errors);
    return errors;
  }
};

export const createAPost = (newPostData) => async (dispatch) => {
  const res = await fetch("/api/posts/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPostData),
  });

  if (res.ok) {
    const newPost = await res.json();
    dispatch(createPost(newPost));
    return newPost;
  } else {
    const errors = await res.json();
    console.log(errors);
    return errors;
  }
};

const initialState = { posts: [] };

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: [...action.posts] };
    }
    case ADD_POST: {
      return { ...state, posts: [...state.posts, action.post] };
    }
    default:
      return state;
  }
};

export default postsReducer;
