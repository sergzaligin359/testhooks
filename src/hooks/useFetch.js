import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

import { useLocalStorage } from '@/hooks'

export const useFetch = url => {
    const baseUrl = 'https://conduit.productionready.io/api/'
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [settings, setSettings] = useState(null)
    const [token] = useLocalStorage('token')

    const sleepIsSubmitting = useCallback(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    const doFetch = useCallback((settings = {}) => {
        setSettings(settings)
        setIsLoading(true)
    }, [])

    useEffect(() => {
        const requestSettings = {
            ...settings,
            ...{
                headers: {
                    authorization: token ? `Token ${ token }` : ''
                }
            }
        }
        if(!isLoading) return
        Axios(`${baseUrl}${url}`, requestSettings).then(res => {
          setResponse(res.data)
          sleepIsSubmitting()
        }).catch(err => {
          setError(err.response.data)
          sleepIsSubmitting()
        })
    }, [isLoading, sleepIsSubmitting, token, url, settings])

    return [
        {
            response,
            error,
            isLoading,
        },
        doFetch
    ]
}