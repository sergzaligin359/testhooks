import React from 'react'
import {Switch, Route} from 'react-router-dom'

import { Authentication, Article, GlobalFeed, TagFeed, YoureFeed } from '@/pages';
import { CreateArticle } from '@/pages';

export default () => {
  return (
    <Switch>
      <Route path="/" component={ GlobalFeed } exact />
      <Route path="/tags/:slug" component={ TagFeed } />
      <Route path="/articles/new" component={ CreateArticle } />
      <Route path="/feed" component={ YoureFeed } />
      <Route path="/articles/:slug" component={ Article } />
      <Route path="/login" component={ Authentication } />
      <Route path="/register" component={ Authentication } />
    </Switch>
  )
}