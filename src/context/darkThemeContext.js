import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({
    darkTheme: false,
    toggleDarkTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    };
    console.log(children, darkTheme)
    return (
        <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
