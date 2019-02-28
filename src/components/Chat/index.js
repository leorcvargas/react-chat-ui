import React, { useState } from 'react';

import ChatInput from '../ChatInput';
import ChatInputWrapper from '../ChatInputWrapper';
import Chatbox from '../Chatbox';
import ChatHistoryWrapper from '../ChatHistoryWrapper';
import ChatHistory from '../ChatHistory';
import './style.css';

const Chat = () => {
  const [messages, setMessages] = useState(['']);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  }

  return (
    <div className='chat'>
      <Chatbox>
        {/* <div className='chat-history-wrapper'>
          <div className='chat-history'>
            {
              messages.map((message, index) => <div key={index}>{message}</div>)
            }
          </div>
        </div> */}
        <ChatHistoryWrapper>
          <ChatHistory>
            {
              messages.map((message, index) => <div key={index}>{message}</div>)
            }
          </ChatHistory>
        </ChatHistoryWrapper>
        <ChatInputWrapper>
          <ChatInput
            handleSubmit={handleNewMessage}
          />
        </ChatInputWrapper>
      </Chatbox>
    </div>
  );
};

export default Chat;