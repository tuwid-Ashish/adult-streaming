'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { ThemeType } from '@/lib/types';
import { Palette } from 'lucide-react';

interface ThemeSwitcherProps {
    version: 'v1' | 'v2' | 'v3';
}

const themeNames: Record<ThemeType, string> = {
    'V1-A': 'Midnight Orange',
    'V1-B': 'Graphite Lime',
    'V2-A': 'Clean Pink',
    'V2-B': 'Night Neon',
    'V3': 'Cinema Gold',
};

export function ThemeSwitcher({ version }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();

    const availableThemes: ThemeType[] =
        version === 'v1' ? ['V1-A', 'V1-B'] :
            version === 'v2' ? ['V2-A', 'V2-B'] :
                ['V3'];

    // If the current theme is not in the available list for this version, reset it
    React.useEffect(() => {
        if (!availableThemes.includes(theme)) {
            setTheme(availableThemes[0]);
        }
    }, [version, theme, setTheme, availableThemes]);

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent transition-colors">
                <Palette className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium hidden sm:inline">{themeNames[theme]}</span>
            </button>

            {availableThemes.length > 1 && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-surface border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {availableThemes.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTheme(t)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors ${theme === t ? 'text-accent' : 'text-text'
                                }`}
                        >
                            {themeNames[t]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
