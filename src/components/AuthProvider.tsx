import { createContext, useContext, useEffect, useState } from "react";
import { User, login, getUser } from "../types/auth";

type AuthContext = {
  user: User | null;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser();
        const user = response;
        setUser(user);
      } catch {
        setUser(null);
      }
    }

    fetchUser();
  }, []);

  async function handleLogin() {
    try {
      const response = await login();
      const user = response;
      setUser(user);
    } catch {
      setUser(null);
    }
  }

  async function handleLogout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
