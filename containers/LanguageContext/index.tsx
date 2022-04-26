import React, { createContext, useContext } from 'react';
export enum Languge {
    vn = 'vn',
    en = 'en',
}

export type LangugeContextType = {
    languge: Languge;
    setLanguge: (Languge: Languge) => void;
}
const getInitialLanguge = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = (window as any).locale || localStorage.getItem("languge") || 'vn';
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
    }

    return 'light' // light theme as the default;
};

export const LangugeContext = createContext<LangugeContextType>({ languge: Languge.vn, setLanguge: languge => console.warn('no theme provider') });
export const useLanguge = () => useContext(LangugeContext);
export const LangugeProvider = ({ initialLanguge, children }: any) => {
    const [languge, setLanguge] = React.useState<any>(getInitialLanguge);

    const rawSetLanguge = (rawLanguge: any) => {
        localStorage.setItem('languge', rawLanguge);
    };

    if (initialLanguge) {
        rawSetLanguge(initialLanguge);
    }

    React.useEffect(() => {
        rawSetLanguge(languge);
    }, [languge]);

    return (
        <LangugeContext.Provider value={{ languge, setLanguge }}>
            {children}
        </LangugeContext.Provider>
    );
};