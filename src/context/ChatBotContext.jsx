import React, { createContext, useState, useContext } from 'react';

// Context 생성
const ChatBotContext = createContext();
console.log('ChatBotContext created');

// Provider 컴포넌트 정의
export const ChatBotProvider = ({ children }) => {
  const [isChatBotActive, setIsChatBotActive] = useState(false);

  const activateChatBot = () => {
    console.log('Activating ChatBot');
    setIsChatBotActive(true);
  };

  return (
    <ChatBotContext.Provider value={{ isChatBotActive, activateChatBot }}>
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
