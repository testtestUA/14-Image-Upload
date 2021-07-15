import React, { createContext, useState, useEffect } from 'react';

export const UploadState = createContext();

const UploadContext = (props) => {
  const [status, setStatus] = useState({
    flow: 'uploading',
    link: null,
  });
  const [contentLoaded, setContentLoaded] = useState(false);

  const promisePreLoad = async (link) => {
    const imagePromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.src = link;
      setTimeout(() => {
        img.onload = resolve();
      }, 1500);
    });
    await imagePromise;
  };

  useEffect(async () => {
    await promisePreLoad('/image.svg');
    setContentLoaded(true);
  }, []);

  return (
    <UploadState.Provider
      value={{ contentLoaded, status, setStatus, promisePreLoad }}
    >
      {props.children}
    </UploadState.Provider>
  );
};

export default UploadContext;
