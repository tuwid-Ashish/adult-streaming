'use client';

import React from 'react';
import { Search, Menu, Bell, Video, User, Zap } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';

export default function PStyleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const categories = ["Home", "Videos", "Categories", "Live", "Stars", "Community", "Photos"];

    return (
        <div className="min-h-screen bg-bg text-text font-sans">
            {/* P-Style Header */}
            <header className="sticky top-0 z-50 bg-[#1b1b1b] border-b border-white/5">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 px-4 h-[60px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1">
                        <span className="text-white font-black text-2xl tracking-tight">Stream</span>
                        <div className="bg-accent px-1.5 py-0.5 rounded-sm">
                            <span className="text-black font-black text-2xl tracking-tight">Box</span>
                        </div>
                    </Link>

                    {/* Search */}
                    <div className="flex-1 max-w-xl mx-4">
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search videos"
                                className="w-full bg-[#121212] border border-white/10 rounded-l-sm px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="bg-accent border border-accent px-6 rounded-r-sm hover:opacity-90 transition-opacity">
                                <Search className="w-4 h-4 text-black font-bold" />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 text-sm font-bold">
                        <button className="hidden md:flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-sm transition-colors text-white/90">
                            <Video className="w-4 h-4" /> Upload
                        </button>
                        <div className="hidden lg:block h-6 w-[1px] bg-white/10 mx-2" />
                        <ThemeSwitcher version="v1" />
                        <button className="text-muted hover:text-white transition-colors">Log In</button>
                        <button className="text-accent hover:underline transition-all">Sign Up</button>
                    </div>
                </div>

                {/* Secondary Nav */}
                <div className="bg-[#282828] border-b border-white/5 px-4 overflow-x-auto no-scrollbar">
                    <div className="max-w-[1400px] mx-auto flex items-center gap-6 h-[40px] text-[13px] font-bold">
                        {categories.map((cat) => (
                            <Link
                                key={cat}
                                href="/v1"
                                className={`whitespace-nowrap transition-colors ${cat === 'Home' ? 'text-accent border-b-2 border-accent mt-[2px]' : 'text-muted hover:text-white'}`}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto min-h-[calc(100vh-100px)]">
                {children}
            </main>
        </div>
    );
}
