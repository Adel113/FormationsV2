import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const value = {
    user,
    loading,
    logout,
    signUp
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Créez un nouveau hook useSignupAccess dans AuthContext.ts
export const useSignupAccess = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAccess = () => {
      const access = sessionStorage.getItem('signup_access');
      const expiration = sessionStorage.getItem('signup_expiration');
      
      if (access === 'true' && expiration && Date.now() < parseInt(expiration)) {
        setHasAccess(true);
      } else {
        sessionStorage.removeItem('signup_access');
        sessionStorage.removeItem('signup_expiration');
        setHasAccess(false);
      }
    };

    checkAccess();
  }, []);

  return hasAccess;
};
