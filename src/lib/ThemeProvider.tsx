"use client";

import { ThemeProvider } from "next-theme";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
