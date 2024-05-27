import React, { useState } from 'react';
import axios from 'axios';
import { useChatBot } from '../context/ChatBotContext';
import './ChatBot.css';

const ChatBot = () => {
  const { messages, addMessage } = useChatBot();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    addMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          max_tokens: 256,
          stop: ["\n", " Human:", " AI:"],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('API Response:', response.data);
      if (response.data.choices && response.data.choices.length > 0) {
        const botMessage = {
          role: 'assistant',
          content: response.data.choices[0].message.content.trim(),
        };
        addMessage(botMessage);
      } else {
        throw new Error('Unexpected API response format');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        const errorMessage = {
          role: 'error',
          content: `Error occurred: ${error.response.data.error.message}`,
        };
        addMessage(errorMessage);
      } else {
        const errorMessage = { role: 'error', content: `Error occurred: ${error.message}` };
        addMessage(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}-message`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-box">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="질문을 입력하세요"
          rows="1"
        />
        <button className='send-button' onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : '보내기'}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;