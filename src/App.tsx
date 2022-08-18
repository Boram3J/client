import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
      <input id='file-input' style={{ display: 'none' }} type='file' />
    </div>
  );
}

export default App;
