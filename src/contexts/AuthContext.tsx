import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import type { AuthState, User, LoginCredentials } from '../types/auth';
import { authenticateUser, generateSessionToken, saveSession, loadSession, clearSession } from '../utils/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

type AuthAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'RESTORE_SESSION'; payload: User };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    case 'RESTORE_SESSION':
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    
    const session = loadSession();
    if (session) {
      dispatch({ type: 'RESTORE_SESSION', payload: session.user });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const user = await authenticateUser(credentials);
      if (user) {
        const token = generateSessionToken();
        saveSession(user, token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return true;
      }
      
      dispatch({ type: 'SET_LOADING', payload: false });
      return false;
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      return false;
    }
  };

  const logout = (): void => {
    clearSession();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};