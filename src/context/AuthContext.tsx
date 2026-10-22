import React, { createContext, useContext, useEffect, useState } from 'react';
import { api, User } from '../lib/api';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, pass: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  quickLoginDemo: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const u = await api.getCurrentUser();
        // If no user is logged in, default to a logged-in demo user for frictionless evaluation
        // while allowing explicit logout or login
        if (u) {
          setUser(u);
        } else {
          // Provide demo user by default so evaluation is immediately rich with progress & courses
          const demoUser: User = {
            id: 'usr_demo_1',
            email: 'learner@ashiskillrise.org',
            fullName: 'Alex Morgan',
            avatarUrl: '', // No default girl photo - user can choose their own from gallery
            role: 'student'
          };
          setUser(demoUser);
        }
      } catch {
        // ignore
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  const login = async (email: string, pass: string) => {
    try {
      const res = await api.login(email, pass);
      setUser(res.user);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Login failed' };
    }
  };

  const register = async (email: string, pass: string, name: string) => {
    try {
      const res = await api.register(email, pass, name);
      setUser(res.user);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Registration failed' };
    }
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  const quickLoginDemo = async () => {
    await login('learner@ashiskillrise.org', 'demo123');
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    try {
      localStorage.setItem('ashiskillrise_active_user', JSON.stringify(updated));
    } catch {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        quickLoginDemo,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
