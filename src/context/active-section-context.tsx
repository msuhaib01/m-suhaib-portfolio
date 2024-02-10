"use client";
import { createContext, useContext, useState } from "react";
import type { HeaderNames } from "../lib/types";
type ActiveSectionContextType = {
  activeSection: HeaderNames;
  setActiveSection: React.Dispatch<React.SetStateAction<HeaderNames>>;
  timeLastClicked: number;
  setTimeLastClicked: React.Dispatch<React.SetStateAction<number>>;
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
  const [timeLastClicked, setTimeLastClicked] = useState(Date.now());
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeLastClicked,
        setTimeLastClicked,
      }}
    >
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
