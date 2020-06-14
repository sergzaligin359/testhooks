import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from '@/routes'
import { TopBar, CurrentUserChecker } from '@/components'
import { CurrentUserProvider } from '@/context'


export default () => {
  return (
    <div className="App">
      <CurrentUserProvider>
        <CurrentUserChecker>
          <BrowserRouter>
            <TopBar />
            <Routes />
          </BrowserRouter>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

