import React, { createContext, useState, useContext } from 'react';

// Context 생성
const ChatBotContext = createContext();
console.log('ChatBotContext created');

// Provider 컴포넌트 정의
export const ChatBotProvider = ({ children }) => {
  const [isChatBotActive, setIsChatBotActive] = useState(false);
  const [chatBotStyle, setChatBotStyle] = useState({});

  const activateChatBot = () => {
    console.log('Activating ChatBot');
    setIsChatBotActive(true);
    setChatBotStyle(style);
  };코

  return (
    <ChatBotContext.Provider value={{ isChatBotActive, activateChatBot ,chatBotStyle}}>
      {children}
    </ChatBotContext.Provider>
  );
};

// useChatBot 훅 정의
export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  console.log('useChatBot context:', context);
  return context;
};
