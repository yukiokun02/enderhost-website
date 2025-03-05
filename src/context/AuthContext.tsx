
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  userName: string | null;
  login: (email: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userEmail: null,
  userName: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if user is authenticated from localStorage
    const authStatus = localStorage.getItem('isAuthenticated');
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    
    if (authStatus === 'true' && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setUserName(name);
    }
  }, []);
  
  const login = (email: string, name: string) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    setIsAuthenticated(true);
    setUserEmail(email);
    setUserName(name);
  };
  
  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserEmail(null);
    setUserName(null);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
