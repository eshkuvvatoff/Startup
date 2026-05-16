"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "persona-locale";

export const messages = {
  en: {
    back: "Back",
    forward: "Forward",
    reload: "Reload",
    searchLens: "Search with Google Lens",
    cast: "Cast…",
    language: "Language",
    english: "English",
    russian: "Russian",
    uzbek: "Uzbek",
  },

  uz: {
    back: "Orqaga",
    forward: "Oldinga",
    reload: "Qayta yuklash",
    searchLens: "Google Lens orqali qidirish",
    cast: "Uzatish…",
    language: "Til",
    english: "Inglizcha",
    russian: "Ruscha",
    uzbek: "O‘zbekcha",
  },

  ru: {
    back: "Назад",
    forward: "Вперёд",
    reload: "Обновить",
    searchLens: "Поиск через Google Lens",
    cast: "Трансляция…",
    language: "Язык",
    english: "English",
    russian: "Русский",
    uzbek: "Узбекский",
  },
};

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === "en" || stored === "uz" || stored === "ru") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (next === "en" || next === "uz" || next === "ru") {
      setLocaleState(next);
    }
  }, []);

  const t = messages[locale] ?? messages.en;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}