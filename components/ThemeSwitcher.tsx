
import React from 'react';
import type { Theme } from '../types';

interface ThemeSwitcherProps {
    currentTheme: Theme;
    onChangeTheme: (theme: Theme) => void;
}

const THEMES: { id: Theme; name: string; colors: [string, string] }[] = [
    { id: 'premium-gold', name: 'Premium Gold', colors: ['#FBBF24', '#F97316'] },
    { id: 'cyber-neon', name: 'Cyber Neon', colors: ['#22D3EE', '#EC4899'] },
];

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onChangeTheme }) => {
    return (
        <div className="fixed top-4 right-4 z-[1002] bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 flex items-center gap-2">
            {THEMES.map(theme => (
                <button
                    key={theme.id}
                    onClick={() => onChangeTheme(theme.id)}
                    className={`w-6 h-6 rounded-full transition-all duration-300 ${currentTheme === theme.id ? 'ring-2 ring-offset-2 ring-offset-black ring-white' : 'hover:scale-110'}`}
                    style={{ background: `linear-gradient(45deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
                    aria-label={`Switch to ${theme.name} theme`}
                />
            ))}
        </div>
    );
};

export default ThemeSwitcher;
