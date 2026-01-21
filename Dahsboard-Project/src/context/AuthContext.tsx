import React, { createContext, useContext, useState } from "react";

type Role = "user" | "admin" | null;

interface AuthContextType {
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [role, setRole] = useState<Role>(null);
  return (
    <AuthContext.Provider
      value={{
        role,
        login: setRole,
        logout: () => setRole(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
