import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from '@/routes'
import { TopBar } from '@/components/TopBar';

export default () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

