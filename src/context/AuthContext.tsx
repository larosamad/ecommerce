import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: { email: string; role: 'generic' | 'admin' } | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    }

    const AuthContext = createContext<AuthContextType | undefined>(undefined);

    export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ email: string; role: 'generic' | 'admin' } | null>(null);

    const login = async (email: string, password: string) => {
        // Simulazione login
        if (email === 'admin@admin.com' && password === 'admin') {
        setUser({ email, role: 'admin' });
        } else if (email === 'user@user.com' && password === 'user') {
        setUser({ email, role: 'generic' });
        } else {
        throw new Error('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
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
