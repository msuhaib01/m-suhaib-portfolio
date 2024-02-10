"use client";
import { createContext, useContext, useState } from "react";
import type { HeaderNames } from "../lib/types";
type ActiveSectionContextType = {
  activeSection: HeaderNames;
  setActiveSection: React.Dispatch<React.SetStateAction<HeaderNames>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

type ActiveSectionContextProviderType = {
  children: React.ReactNode;
};

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderType) {
  const [activeSection, setActiveSection] = useState<HeaderNames>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(): ActiveSectionContextType {
  const context = useContext(ActiveSectionContext);
  if (context == null) {
    throw new Error("Context must be used within Provider");
  }
  return context;
}
