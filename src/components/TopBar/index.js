import React, { useContext } from 'react'
import {NavLink, Link} from 'react-router-dom'

import { CurrentUserContext } from '@/context'

export const TopBar = () => {
  const [{ isLoggedIn, currentUser }] = useContext(CurrentUserContext)
  //console.log(currentUser)
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          {
            !isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Sign in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Sign up
                  </NavLink>
                </li>
              </>
            )
          }
          {
            isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink to="/articles/new" className="nav-link">
                    <i className="ion-compose"></i>&nbsp; New post
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/profiles/${currentUser.username}`} className="nav-link">
                    <img src={currentUser.image} alt={currentUser.image} className='user-pic' />
                    &nbsp;
                    {currentUser.username}
                  </NavLink>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

