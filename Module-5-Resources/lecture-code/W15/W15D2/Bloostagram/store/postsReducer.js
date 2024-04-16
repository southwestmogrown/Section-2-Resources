import seedData from "../seed-data";

const GET_POSTS = 'posts/GET_POSTS';
const ADD_POST = 'posts/ADD_POST';

export const createPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
}


export const loadPosts = () => {
    return {
        type: GET_POSTS,
        
    }
}

const initialState = { posts: seedData };

const postsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POSTS: {
            return { ...state }
        }
        case ADD_POST: {
            return { ...state, posts: [...state.posts, action.post]}
        }
        default:
            return state
    }
}

export default postsReducer;