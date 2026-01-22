import { createContext,  useContext, useState, type ReactNode } from "react";

type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
};
const defaultAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthState>(defaultAuthState);

type AuthProviderProps = { children: ReactNode };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => {
    setIsAuthenticated(true);
    setUser(username);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
