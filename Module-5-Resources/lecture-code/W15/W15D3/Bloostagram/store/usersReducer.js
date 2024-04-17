import { users } from '../seed-data';

const LOAD_USERS = 'users/LOAD_USERS';
const LOGIN_USER = 'users/LOGIN_USER';
const LOGOUT_USER = 'users/LOGOUT_USER';


export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        user
    }
} 

// const loadUsers = {
//     type: LOAD_USERS
// }

export const loadUsers = () => {
    return {
        type: LOAD_USERS
    }
}


const initialState = { users: users, sessionUser: null };

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_USERS: {
            return { ...state }
        }
        case LOGIN_USER: {
            const newState = { ...state };
            newState.sessionUser = action.user
            return newState
        }
        case LOGOUT_USER: {
            const newState = { ...state };
            newState.sessionUser = null;
            return newState
        }
        default:
            return state
    }
}

export default usersReducer;