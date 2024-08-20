import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check if a theme is saved in localStorage
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            // If a saved theme exists, use it
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            // If no saved theme, detect the system preference
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const defaultTheme = systemPrefersDark ? 'dark' : 'light';
            
            // Set the detected theme as the initial theme
            setTheme(defaultTheme);
            document.documentElement.classList.add(defaultTheme);
            
            // Store the system preference in localStorage
            localStorage.setItem('theme', defaultTheme);
        }

        // Watch for changes in the system theme preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
            document.documentElement.classList.replace(theme, newTheme);
            localStorage.setItem('theme', newTheme);
        };

        mediaQuery.addEventListener('change', handleChange);

        // Cleanup the event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.replace(theme, newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
