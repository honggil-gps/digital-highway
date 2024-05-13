import { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);

export const AddressProvider = ({ children }) => {
  const [baseAddress, setBaseAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  return (
    <AddressContext.Provider value={{ baseAddress, setBaseAddress, detailAddress, setDetailAddress }}>
      {children}
    </AddressContext.Provider>
  );
};