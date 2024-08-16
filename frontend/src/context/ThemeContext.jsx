import { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Load the token and userId from localStorage when the app starts
        const savedToken = localStorage.getItem('token');
        const savedUserId = localStorage.getItem('userId');
        if (savedToken) setToken(savedToken);
        if (savedUserId) setUserId(savedUserId);
    }, []);

    const saveAuthData = (token, userId) => {
        // Save token and userId to localStorage and update the state
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        setToken(token);
        setUserId(userId);
    };

    const clearAuthData = () => {
        // Clear token and userId from localStorage and reset the state
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setToken(null);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ token, userId, saveAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};