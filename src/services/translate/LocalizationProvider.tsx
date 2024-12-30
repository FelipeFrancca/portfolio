// src/components/LocalizationProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LocalizationContextProps {
    locale: string;
    toggleLocale: () => void;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

interface LocalizationProviderProps {
    children: ReactNode;
}

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
    const [locale, setLocale] = useState<string>('pt-BR');

    const toggleLocale = () => {
        setLocale((prevLocale) => (prevLocale === 'pt-BR' ? 'en' : 'pt-BR'));
    };

    return (
        <LocalizationContext.Provider value={{ locale, toggleLocale }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = (): LocalizationContextProps => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};

export default LocalizationProvider;
