import React, { createContext, useContext, useState, useEffect } from 'react';

export type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuth === 'true');
    setIsLoading(false);
  }, []);

  const login = (password: string): boolean => {
    const correctPassword = import.meta.env.VITE_SITE_PASSWORD || 'guest';
    
    if (!import.meta.env.VITE_SITE_PASSWORD) {
      console.warn('VITE_SITE_PASSWORD environment variable is not set, using default password "guest"');
    }

    const isCorrect = password === correctPassword;
    if (isCorrect) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    }
    return isCorrect;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
