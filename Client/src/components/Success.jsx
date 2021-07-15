import React, { useContext } from 'react';
import { UploadState } from '../context/UploadContext';
import './Success.scss';
const Success = () => {
  const { status } = useContext(UploadState);
  return (
    <section className='success'>
      <div className='success-icon material-icons'>check</div>
      <div className='success-msg'>Uploaded Successfully!</div>
      <div className='success-img-container'>
        <img src={status.link} className='success-img' />
      </div>
      <div className='success-input-conainer'>
        <input value={status.link} type='text' className='success-link' />
        <button
          onClick={(e) => {
            navigator.clipboard.writeText(status.link);
            e.target.innerText = 'Copied!';
          }}
          className='success-btn'
        >
          Copy Link
        </button>
      </div>
    </section>
  );
};

export default Success;
