import React, { createContext, useContext, useEffect } from 'react';
export enum Color {
    color1 = '#1abc9c',
    color2 = '#3498db',
    color3 = '#e74c3c',
    color4 = '#8e44ad',
    color5 = '#2c3e50',
    color6 = '#f1c40f',
}

export type ColorContextType = {
    color: Color;
    setColor: (color: Color) => void;
}
const getInitialColor = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = localStorage.getItem("color") || '#e74c3c';
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
    }

    return 'light' // light theme as the default;
};

export const ColorContext = createContext<ColorContextType>({ color: Color.color3, setColor: color => console.warn('no theme provider') });
export const useColor = () => useContext(ColorContext);
export const ColorProvider = ({ initialColor, children }: any) => {
    const [color, setColor] = React.useState<any>(getInitialColor);

    const rawSetColor = (rawColor: any) => {
        localStorage.setItem('color', rawColor);
    };

    if (initialColor) {
        rawSetColor(initialColor);
    }

    useEffect(() => {
        rawSetColor(color);
        const root = document.documentElement;
        root?.style.setProperty(
            "--color",
            color
        );
        root?.style.setProperty(
            "--color-bg",
            color + 70
        );
    }, [color]);

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
};