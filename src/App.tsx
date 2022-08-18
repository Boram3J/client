import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Result from './pages/Result';
import { PATH } from './constants/path';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={PATH.root} element={<Main />} />
        <Route path={PATH.result} element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
