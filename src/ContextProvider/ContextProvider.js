import React, { createContext } from 'react';
import UseFirebase from '../hooks/UseFirebase';
export const AuthContext= createContext();

const ContextProvider = ({children}) => {
    const allAuthContext=UseFirebase()
    return (
        <AuthContext.Provider value={allAuthContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;