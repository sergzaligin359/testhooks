import React, { useEffect, useContext } from 'react'
import { useFetch, useLocalStorage } from '@/hooks'
import { CurrentUserContext } from '@/context';
import { SET_UNAUTH, IS_LOADING, SET_AUTH } from '@/actionTypes';

export const CurrentUserChecker = ({ children }) => {

    const [{ response }, doFetch] = useFetch('user')
    const [, dispatch] = useContext(CurrentUserContext)
    const [token] = useLocalStorage('token')

    useEffect(() => {
        if(!token) {
          dispatch({
            type: SET_UNAUTH
          })
          return
        }
        doFetch()
        dispatch({
          type: IS_LOADING
        })
    }, [doFetch, token, dispatch])

    useEffect(() => {
        if(!response) return
        dispatch({
          type: SET_AUTH,
          payload: response.user
        })
    }, [response, dispatch])

    return (
        <div>
            { children }
        </div>
    )
}
