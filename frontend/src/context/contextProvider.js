import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
 

  const contextValue = {
    user,
    setUser,
    password,
    setPassword
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;
