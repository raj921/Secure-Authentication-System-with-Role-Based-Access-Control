import type { User, LoginCredentials } from '../types/auth';


const mockUsers: User[] = [
  {
    id: '1',
    email: 'client@example.com',
    name: 'Sarah Johnson',
    role: 'client',
    avatar: 'https:
    lastLogin: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: '2',
    email: 'therapist@example.com',
    name: 'Dr. Michael Chen',
    role: 'therapist',
    avatar: 'https:
    lastLogin: new Date('2024-01-15T08:15:00Z')
  },
  {
    id: '3',
    email: 'admin@example.com',
    name: 'Jennifer Martinez',
    role: 'admin',
    avatar: 'https:
    lastLogin: new Date('2024-01-15T07:45:00Z')
  }
];

export const authenticateUser = async (credentials: LoginCredentials): Promise<User | null> => {
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  
  const user = mockUsers.find(u => u.email === credentials.email);
  
  if (user && credentials.password === 'password123') {
    
    user.lastLogin = new Date();
    return user;
  }
  
  return null;
};

export const generateSessionToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const validateSession = (token: string): boolean => {
  
  return token && token.length > 10;
};

export const clearSession = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_data');
};

export const saveSession = (user: User, token: string): void => {
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user_data', JSON.stringify(user));
};

export const loadSession = (): { user: User; token: string } | null => {
  const token = localStorage.getItem('auth_token');
  const userData = localStorage.getItem('user_data');
  
  if (token && userData && validateSession(token)) {
    try {
      const user = JSON.parse(userData);
      return { user, token };
    } catch {
      clearSession();
    }
  }
  
  return null;
};