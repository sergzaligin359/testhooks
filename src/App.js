import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from '@/routes'

export default () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

