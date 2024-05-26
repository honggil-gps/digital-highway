import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: newMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          max_tokens: 256,  // 토큰 수를 늘립니다.
          stop: ["\n", " Human:", " AI:"],  // 자연스럽게 끝나도록 종료 시퀀스 추가
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
          content: response.data.choices[0].message.content.trim(),  // 응답 내용을 정리합니다.
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
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
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } else {
        const errorMessage = { role: 'error', content: `Error occurred: ${error.message}` };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
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