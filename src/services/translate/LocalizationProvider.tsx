import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TranslationTypes } from "../types/translationTypes";
import ptBR from "./languages/pt_br";
import en from "./languages/en";

interface LocalizationContextProps {
  locale: string;
  translations: TranslationTypes;
  toggleLocale: () => void;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(
  undefined
);

interface LocalizationProviderProps {
  children: ReactNode;
}

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const getInitialLocale = (): string => {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || "pt-BR";
  };

  const [locale, setLocale] = useState<string>(getInitialLocale);
  const [translations, setTranslations] = useState<TranslationTypes>(
    locale === "pt-BR" ? ptBR : en
  );

  useEffect(() => {
    setTranslations(locale === "pt-BR" ? ptBR : en);
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "pt-BR" ? "en" : "pt-BR"));
  };

  return (
    <LocalizationContext.Provider
      value={{ locale, translations, toggleLocale }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextProps => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};

export default LocalizationProvider;
