import React from 'react';

import './style.css';

const ChatHistory = ({ children }) => {
  return (
    <div className='chat-history'>
      {children}
    </div>
  );
}

export default ChatHistory;
