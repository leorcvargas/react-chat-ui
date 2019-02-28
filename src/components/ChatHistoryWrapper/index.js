import React from 'react';

import './style.css';

const ChatHistoryWrapper = ({ children }) => {
  return (
    <div className='chat-history-wrapper'>
      {children}
    </div>
  );
}

export default ChatHistoryWrapper;
