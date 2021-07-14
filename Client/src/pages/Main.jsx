import React, { useState, useEffect } from 'react';
import Upload from '../components/Upload';
import Loader from '../components/Loader';
import Success from '../components/Success';
import './Main.scss';

const Main = () => {
  return (
    <main id='main'>
      <article id='main-article'>
        <Upload />
        <Loader />
        <Success />
      </article>
    </main>
  );
};

export default Main;
