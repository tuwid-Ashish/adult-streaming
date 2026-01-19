'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Home, Search, Play, Image as ImageIcon, Users, List, Menu, ChevronRight } from 'lucide-react';

export default function XStyleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const mainNav = [
        { icon: <Home className="w-5 h-5" />, label: 'Home' },
        { icon: <Play className="w-5 h-5" />, label: 'Videos' },
        { icon: <ImageIcon className="w-5 h-5" />, label: 'Photos' },
        { icon: <Users className="w-5 h-5" />, label: 'Creators' },
    ];

    const categories = ["Anal", "Asian", "Big Tits", "Blonde", "Ebony", "Japanese", "Latina", "MILF", "POV", "Reality", "Teen"];

    return (
        <div className="min-h-screen bg-[#111111] text-[#EEEEEE] font-sans">
            {/* Top Bar with Orientation Toggle */}
            <div className="bg-[#181818] border-b border-white/5 h-[40px] px-4 flex items-center justify-between invisible md:visible">
                <div className="flex gap-4 text-[11px] font-bold uppercase tracking-wider">
                    <button className="text-accent border-b-2 border-accent h-[40px] px-2 transition-all">Straight</button>
                    <button className="text-muted hover:text-white h-[40px] px-2 transition-all">Gay</button>
                    <button className="text-muted hover:text-white h-[40px] px-2 transition-all">Trans</button>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeSwitcher version="v2" />
                    <span className="text-[11px] font-bold text-accent2 cursor-pointer hover:underline">Premium Membership</span>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-[#1e1e1e] border-b border-white/10 shadow-lg">
                <div className="mx-auto flex items-center justify-between gap-4 px-4 h-[60px]">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center">
                            <span className="text-accent font-black text-3xl">x</span>
                            <span className="text-white font-bold text-2xl tracking-tighter">Stream</span>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            {mainNav.map((item) => (
                                <button key={item.label} className="flex flex-col items-center gap-0.5 group transition-all">
                                    <div className="text-muted group-hover:text-accent2 transition-colors">{item.icon}</div>
                                    <span className="text-[10px] font-bold uppercase text-muted group-hover:text-white">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="flex-1 max-w-lg">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="w-full bg-[#111111] border border-white/20 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-accent2 transition-colors"
                            />
                            <button className="absolute right-3">
                                <Search className="w-4 h-4 text-muted hover:text-white transition-colors" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-xs font-bold bg-accent2 hover:bg-sky-500 px-4 py-2 rounded-sm text-white transition-all">
                            Join Now
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Desktop Sidebar */}
                <aside className="hidden xl:block w-[240px] fixed left-0 top-[100px] bottom-0 overflow-y-auto no-scrollbar bg-[#111111] border-r border-white/5 p-4 space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase text-muted tracking-widest pl-2 mb-4">Top Categories</h3>
                        {categories.map((cat) => (
                            <button key={cat} className="w-full flex items-center justify-between px-3 py-2 rounded-sm hover:bg-surface transition-colors text-sm group">
                                <span className="group-hover:text-accent2 transition-colors">{cat}</span>
                                <ChevronRight className="w-3 h-3 text-muted" />
                            </button>
                        ))}
                    </div>
                    <div className="pt-6 border-t border-white/5">
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-accent hover:underline">
                            <List className="w-4 h-4" /> All Categories
                        </button>
                    </div>
                </aside>

                <main className="flex-1 xl:ml-[240px] p-4 min-h-screen">
                    {children}
                </main>
            </div>

            {/* Mobile Nav */}
            <nav className="fixed bottom-0 inset-x-0 h-16 bg-[#1e1e1e] border-t border-white/10 flex items-center justify-around xl:hidden z-50">
                {mainNav.map((item) => (
                    <button key={item.label} className="flex flex-col items-center gap-1 text-muted hover:text-white">
                        {item.icon}
                        <span className="text-[10px] uppercase font-bold">{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
