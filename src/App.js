import React from 'react';
import Main from './pages/Main';
import UploadContext from './context/UploadContext';

const App = () => {
  return (
    <UploadContext>
      <Main />
    </UploadContext>
  );
};

export default App;
