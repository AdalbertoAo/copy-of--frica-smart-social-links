
import React, { useState, useEffect } from 'react';
import SocialCard from './components/SocialCard';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
    // Initialize state directly from the DOM to ensure consistency with the inline script
    // This prevents a flash of the wrong theme on page load.
    const [theme, setTheme] = useState(() => 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <main className="relative min-h-screen w-full bg-slate-100 dark:bg-zinc-900 flex items-center justify-center p-4 transition-colors">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <SocialCard />
        </main>
    );
};

export default App;
