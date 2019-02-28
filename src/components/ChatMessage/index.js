import React from 'react';

import './style.css';

const ChatMessage = ({ key, message, isOwner }) => {
  return isOwner
    ? (
      <div key={key} className='chat-message is-owner'>{message}</div>
    )
    : (
      <div key={key} className='chat-message not-owner'>{message}</div>
    )
}

export default ChatMessage;
