import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export const Authentication = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Email:Password', email, password)
  }

  const sleepIsSubmitting = () => {
    setTimeout(() => {
      setIsSubmitting(false)
    }, 3000)
  }

  useEffect(() => {
    if(!isSubmitting) return;
    Axios('https://conduit.productionready.io/api/users', {
      method: 'post',
      data: {
        user: {
          email: 'ssdd',
          password: '123212'
        }
      }
    }).then(res => {
      console.log('Success', res)
      sleepIsSubmitting()
    }).catch(err => {
      console.error('Error', err)
      sleepIsSubmitting()
    })
  }, [isSubmitting])

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <form onSubmit={ handleSubmit }>
              <fieldset>
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
                  disabled={ isSubmitting }
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
