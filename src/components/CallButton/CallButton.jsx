import React from 'react';
import Vite from '../../../public/vite.svg';
const CallButton = () => {
  return (
    <a
      href="tel:+380123456789"
      className="btn btn-primary rounded-circle shadow d-flex justify-content-center align-items-center"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '40px',
        width: '60px',
        height: '60px',
        zIndex: 9999,
        fontSize: '24px',
      }}
      aria-label="Позвонить"
    >
    <img src={Vite} />
    </a>
  );
};

export default CallButton;
