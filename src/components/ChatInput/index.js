import React, { useState } from 'react';

import './style.css';

const ChatInput = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    handleSubmit(inputValue);
    setInputValue('');    
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name='chat-input'
        className='chat-input'
        placeholder='Digitar...'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default ChatInput;
