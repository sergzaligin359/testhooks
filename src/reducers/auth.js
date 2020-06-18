import { IS_LOADING, SET_AUTH, LOGOUT, SET_UNAUTH } from '@/actionTypes'

export const auth = (state, { type, payload }) => {
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