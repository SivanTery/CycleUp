import { userService } from "../services/user.service"

export const SET_USER = 'SET_USER'
export const ADD_USER = 'ADD_USER'
const initialState = {
    user: null,
}

export function userReducer(state = initialState, action) {
    let USER

    switch (action.type) {
        case SET_USER:
            return { ...state, USER: action.USER }
        case ADD_USER:
            USER = [action.product, ...state.USER]
            return { ...state, USER }

        default:
            return state
    }
}