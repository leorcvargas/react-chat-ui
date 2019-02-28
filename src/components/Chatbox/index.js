import React from 'react';

import './style.css';

const Chatbox = ({ children }) => {
  return (
    <div className='chatbox'>
      {children}
    </div>
  );
}

export default Chatbox;
