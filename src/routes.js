import React from 'react'
import {Switch, Route} from 'react-router-dom'

import { Authentication, Article, GlobalFeed, TagFeed } from '@/pages';

export default () => {
  return (
    <Switch>
      <Route path="/" component={ GlobalFeed } exact />
      <Route path="/tags/:slug" component={ TagFeed } />
      <Route path="/articles/:slug" component={ Article } />
      <Route path="/login" component={ Authentication } />
      <Route path="/register" component={ Authentication } />
    </Switch>
  )
}