import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Context 생성
const ChatBotContext = createContext();
console.log('ChatBotContext created');

const initialState = {
  isChatBotActive: false,
  chatBotStyle: {},
  messages: JSON.parse(localStorage.getItem('chatBotMessages')) || [],
};

const MAX_MESSAGES = 100;

const chatBotReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_CHATBOT':
      return { ...state, isChatBotActive: true, chatBotStyle: action.payload };
    case 'ADD_MESSAGE':
      const newMessages = [...state.messages, action.payload];
      if (newMessages.length > MAX_MESSAGES) {
        newMessages.shift(); // 가장 오래된 메시지 제거
      }
      localStorage.setItem('chatBotMessages', JSON.stringify(newMessages));
      return { ...state, messages: newMessages };
    case 'RESET_MESSAGES':
      localStorage.removeItem('chatBotMessages');
      return { ...state, messages: [] };
    default:
      return state;
  }
};

export const ChatBotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatBotReducer, initialState);

  const activateChatBot = (style) => {
    console.log('Activating ChatBot');
    dispatch({ type: 'ACTIVATE_CHATBOT', payload: style });
  };

  const addMessage = (message) => {
    dispatch({ type: 'ADD_MESSAGE', payload: message });
  };

  const resetMessages = () => {
    dispatch({ type: 'RESET_MESSAGES' });
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('chatBotMessages');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <ChatBotContext.Provider value={{ ...state, activateChatBot, addMessage, resetMessages }}>
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  console.log('useChatBot context:', context);
  return context;
};