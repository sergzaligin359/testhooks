import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

export const useFetch = url => {
    const baseUrl = 'https://conduit.productionready.io/api/'
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [settings, setSettings] = useState(null)

    const sleepIsSubmitting = useCallback(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    const doFetch = (settings = {}) => {
        setSettings(settings)
        setIsLoading(true)
    }

    useEffect(() => {
        if(!isLoading) return;
        Axios(`${baseUrl}${url}`, settings).then(res => {
          setResponse(res.data)
          sleepIsSubmitting()
        }).catch(err => {
          setError(err.response.data)
          sleepIsSubmitting()
        })
    }, [isLoading, sleepIsSubmitting, settings, url])

    return [
        {
            response,
            error,
            isLoading,
        },
        doFetch
    ]
}