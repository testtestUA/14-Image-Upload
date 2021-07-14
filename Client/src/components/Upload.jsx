import React, { useRef, useContext } from 'react';
import { UploadState } from '../context/UploadContext';
import axios from 'axios';
import './Upload.scss';
const Upload = () => {
  const { file, setFile } = useContext(UploadState);
  const fileRefDrag = useRef();
  const fileRefClick = useRef();

  const uploadImage = async (image) => {
    try {
      const data = new FormData();
      data.append('image', image);
      const post = await axios.post('/image/upload', data);
      const imageLink = post.data;
      console.log(imageLink);
    } catch (error) {
      console.log(error);
    }
  };

  const formHandler = (ref) => {
    const image = ref.current.files[0];
    if (!image) return;
    uploadImage(image);
  };

  return (
    <section className='upload'>
      <h1 className='upload-title'>Upload your image</h1>
      <p className='upload-label'>File should be Jpeg, Png,...</p>
      <div className='upload-dragzone'>
        <input
          onClick={(e) => e.preventDefault()}
          onChange={() => formHandler(fileRefDrag)}
          ref={fileRefDrag}
          id='file'
          type='file'
          name='image'
          style={{ opacity: '0' }}
        />
        <img className='upload-dragzone-img' />
        <figcaption className='upload-dragzone-fig'>
          Drag & Drop your image here
        </figcaption>
      </div>
      <p className='upload-text1'>Or</p>
      <button
        onClick={() => fileRefClick.current.click()}
        className='upload-button'
      >
        Choose a file
      </button>
      <input
        onChange={() => formHandler(fileRefClick)}
        ref={fileRefClick}
        id='file'
        type='file'
        name='image'
        style={{ opacity: '0' }}
      />
    </section>
  );
};

export default Upload;

{
  /* <form onSubmit={formHandler}>
        <label onClick={() => fileRef.clickBack} htmlFor='file'>
          TEST
        </label>
        <input
          ref={fileRef}
          id='file'
          type='file'
          name='image'
          style={{ display: 'none' }}
        />
        <button onDragOver={() => alert('Error')} type='submit'>
          CLICK
        </button>
      </form> */
}
