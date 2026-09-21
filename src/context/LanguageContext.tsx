"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved === "fr" || saved === "en") {
      queueMicrotask(() => setLangState(saved));
    } else if (typeof navigator !== "undefined" && !navigator.language.startsWith("fr")) {
      queueMicrotask(() => setLangState("en"));
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
