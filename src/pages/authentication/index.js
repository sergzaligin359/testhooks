import React, { useState, useEffect, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { useFetch, useLocalStorage } from '@/hooks';
import { CurrentUserContext } from '@/context';
import { BackendErrorMessages } from '@/components';
import { SET_AUTH } from '@/actionTypes';

export const Authentication = ({ match }) => {

  const isLogin = match.path === '/login'
  const pageTitle = isLogin ? 'Sign in' : 'Sign up'
  const linkDesc = isLogin ? '/register' : '/login'
  const textDesc = isLogin ? 'Need an account?' : 'Have an account?'
  const apiUrl = isLogin ? 'users/login' : 'users'

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [{ response, error, isLoading  }, doFetch] = useFetch(apiUrl)
  const [token, setToken] = useLocalStorage('token')
  const [, dispatch] = useContext(CurrentUserContext)

  const handleSubmit = e => {
    e.preventDefault()
    const user = isLogin ? {email, password} : { username, email, password }
    doFetch({
      method: 'post',
      data: {
        user
      }
    })
    console.log('Email:Password', email, password)
  }

  useEffect(() => {
    if(!response) return;
    setToken(response.user.token)
    dispatch({
      type: SET_AUTH,
      payload: response.user
    })
  }, [response, setToken, dispatch])

  if(token) {
    return <Redirect to='/' />
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{ pageTitle }</h1>
            <p className="text-xs-center">
              <Link to={ linkDesc }>{ textDesc }</Link>
            </p>
            <form onSubmit={ handleSubmit }>
              {error && (
                <BackendErrorMessages backendErrors={ error.errors } />
              )}
              <fieldset>
                {!isLogin && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={ username }
                      onChange={ e => setUsername(e.target.value) }
                    />
                  </fieldset>
                )}
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={ email }
                    onChange={ e => setEmail(e.target.value) }
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                  />
                </fieldset>
                <button
                  disabled={ isLoading }
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  { pageTitle }
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
