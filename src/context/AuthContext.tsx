import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('Auth Environment:', {
    mode: import.meta.env.MODE,
    base: import.meta.env.BASE_URL,
    hasPassword: !!import.meta.env.VITE_SITE_PASSWORD
  });

  // Check if the user is already authenticated from local storage
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    console.log('Initial Auth State:', {
      storedAuth,
      currentPath: window.location.pathname
    });
    return storedAuth === 'true';
  });

  // Use environment variable password or fallback for production
  const correctPassword = import.meta.env.VITE_SITE_PASSWORD || 'welcome';  // Fallback password for production

  const login = (password: string): boolean => {
    console.log('Login Attempt:', {
      passwordLength: password.length,
      correctPasswordLength: correctPassword.length,
      currentPath: window.location.pathname
    });
    const isCorrect = password === correctPassword;
    if (isCorrect) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      console.log('Login Success');
    } else {
      console.log('Login Failed');
    }
    return isCorrect;
  };

  const logout = () => {
    console.log('Logout:', { currentPath: window.location.pathname });
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
