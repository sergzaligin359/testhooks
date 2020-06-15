import React, { useEffect, useContext } from 'react'
import { useFetch, useLocalStorage } from '@/hooks'
import { CurrentUserContext } from '@/context';

export const CurrentUserChecker = ({ children }) => {

    const [{ response }, doFetch] = useFetch('user')
    const [, setCurrentUserState] = useContext(CurrentUserContext)
    const [token] = useLocalStorage('token')

    useEffect(()=>{
        if(!token) {
            setCurrentUserState(state => {
                return {
                  ...state,
                  isLoading: false,
                }
              })
              return
        }
        doFetch()
        setCurrentUserState(state => {
            return {
              ...state,
              isLoading: true,
            }
          })
    }, [doFetch, token, setCurrentUserState])

    useEffect(() => {
        if(!response) return
        setCurrentUserState(state => {
            return {
              ...state,
              isLoading: false,
              isLoggedIn: true,
              currentUser: response.user,
            }
          })
    }, [response, setCurrentUserState])

    return (
        <div>
            { children }
        </div>
    )
}
