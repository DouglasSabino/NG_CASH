import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [userToRecive, setUserToRecive] = useState('');
  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(true);
  const [valueToTransfer, setValueToTransfer] = useState('0');
  const [bankHistory, setBankHistory] = useState([]);

  const contextValue = {
    user,
    setUser,
    password,
    setPassword,
    balance,
    setBalance,
    showBalance,
    setShowBalance,
    valueToTransfer,
    setValueToTransfer,
    userToRecive, 
    setUserToRecive,
    bankHistory, 
    setBankHistory
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;
