"use client"

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface AuthSessionProviderProps {
  children: ReactNode;
}

const AuthSessionProvider: FC<AuthSessionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthSessionProvider;
