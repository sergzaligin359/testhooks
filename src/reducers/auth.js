import { IS_LOADING, SET_AUTH, LOGOUT, SET_UNAUTH } from '@/actionTypes'

const initialState = {
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
}

export const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SET_AUTH:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                currentUser: payload
            }
        case SET_UNAUTH:
            return {
                ...state,
                isLoggedIn: false,
            }
        case LOGOUT:
                return {
                    ...state,
                    isLoggedIn: false,
            }
        default:
            return state
    }
}