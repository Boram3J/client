import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import { PATH } from './constants/path';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={PATH.root} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
