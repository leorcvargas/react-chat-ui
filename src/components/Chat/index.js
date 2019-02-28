import React, { useState } from 'react';

import ChatInput from '../ChatInput';
import ChatInputWrapper from '../ChatInputWrapper';
import Chatbox from '../Chatbox';
import ChatHistoryWrapper from '../ChatHistoryWrapper';
import ChatHistory from '../ChatHistory';
import './style.css';
import ChatMessage from '../ChatMessage';

const Chat = () => {
  const [messages, setMessages] = useState([{ value: 'Hi', isOwner: false }]);

  const handleNewOwnerMessage = (value) => {
    setMessages([...messages, { value, isOwner: true }]);
  }

  return (
    <div className='chat'>
      <Chatbox>
        <ChatHistoryWrapper>
          <ChatHistory>
            {
              messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message.value}
                  isOwner={message.isOwner}
                />
              ))
            }
          </ChatHistory>
        </ChatHistoryWrapper>
        <ChatInputWrapper>
          <ChatInput
            handleSubmit={handleNewOwnerMessage}
          />
        </ChatInputWrapper>
      </Chatbox>
    </div>
  );
};

export default Chat;