import React, { createContext, useState } from 'react';

export const UploadState = createContext();

const UploadContext = (props) => {
  const [file, setFile] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <UploadState.Provider value={{ file, setFile, loading, setLoading }}>
      {props.children}
    </UploadState.Provider>
  );
};

export default UploadContext;
