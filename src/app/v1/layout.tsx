'use client';

import React from 'react';
import { Search, Menu, Bell, Video, User, Zap } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';

export default function VelocityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-bg text-text">
            {/* Velocity Top Nav */}
            <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border px-4 py-2">
                <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-surface rounded-full">
                            <Menu className="w-5 h-5" />
                        </button>
                        <Link href="/" className="flex items-center gap-1">
                            <Zap className="w-6 h-6 text-accent fill-accent" />
                            <span className="font-black text-lg tracking-tighter uppercase italic hidden sm:inline">Velocity</span>
                        </Link>
                    </div>

                    <div className="flex-1 max-w-2xl px-4">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full bg-surface border border-border rounded-full px-5 py-2 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="absolute right-3 p-1 rounded-full hover:bg-bg/50">
                                <Search className="w-4 h-4 text-muted" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4 font-medium">
                        <div className="hidden md:flex items-center gap-3">
                            <button className="p-2 hover:bg-surface rounded-full">
                                <Video className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-surface rounded-full">
                                <Bell className="w-5 h-5" />
                            </button>
                        </div>
                        <ThemeSwitcher version="v1" />
                        <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                            <User className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>
        </div>
    );
}
