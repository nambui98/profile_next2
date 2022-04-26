import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from '../ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition btn-shadow dark:btn-shadow-dark duration-500 ease-in-out rounded-full p-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
                <FaSun
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer dark"
                />
            ) : (
                <FaMoon
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer light"
                />
            )}
        </div>
    );
};

export default Toggle;