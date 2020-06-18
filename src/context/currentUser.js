import React, { createContext, useReducer } from 'react'

import { auth } from '@/reducers'

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
    const initialState = {
        isLoading: false,
        isLoggedIn: null,
        currentUser: null,
    }
    const value = useReducer(auth, initialState)
    return (
        <CurrentUserContext.Provider value={ value }>{ children }</CurrentUserContext.Provider>
    )
}