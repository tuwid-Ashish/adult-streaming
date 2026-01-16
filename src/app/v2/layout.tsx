'use client';

import React from 'react';
import { Home, Search, PlusCircle, MessageCircle, User, Zap } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';

export default function CircleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-bg text-text pb-20 sm:pb-0 sm:pl-20">
            {/* Circle Top Header (Mobile only) */}
            <header className="sm:hidden sticky top-0 z-40 bg-bg/80 backdrop-blur-md px-4 py-3 border-b border-border flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1">
                    <Zap className="w-6 h-6 text-accent fill-accent" />
                    <span className="font-black text-xl tracking-tighter uppercase">Circle</span>
                </Link>
                <ThemeSwitcher version="v2" />
            </header>

            {/* Circle Sidebar / Navigation (Desktop) */}
            <nav className="fixed left-0 top-0 bottom-0 w-20 bg-surface border-r border-border hidden sm:flex flex-col items-center py-8 gap-8 z-50">
                <Link href="/" className="mb-4">
                    <Zap className="w-8 h-8 text-accent fill-accent" />
                </Link>
                <div className="flex flex-col gap-6">
                    <button className="p-3 hover:bg-bg rounded-2xl transition-colors text-accent"> <Home className="w-6 h-6" /> </button>
                    <button className="p-3 hover:bg-bg rounded-2xl transition-colors"> <Search className="w-6 h-6" /> </button>
                    <button className="p-3 hover:bg-bg rounded-2xl transition-colors text-accent2"> <PlusCircle className="w-6 h-6" /> </button>
                    <button className="p-3 hover:bg-bg rounded-2xl transition-colors"> <MessageCircle className="w-6 h-6" /> </button>
                    <button className="p-3 hover:bg-bg rounded-2xl transition-colors"> <User className="w-6 h-6" /> </button>
                </div>
                <div className="mt-auto">
                    <ThemeSwitcher version="v2" />
                </div>
            </nav>

            {/* Circle Bottom Nav (Mobile) */}
            <nav className="fixed bottom-0 inset-x-0 h-16 bg-surface border-t border-border flex items-center justify-around sm:hidden z-50">
                <button className="flex flex-col items-center gap-1 text-accent">
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-muted">
                    <Search className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Search</span>
                </button>
                <button className="text-accent2">
                    <PlusCircle className="w-10 h-10" />
                </button>
                <button className="flex flex-col items-center gap-1 text-muted">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Chat</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-muted">
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Profile</span>
                </button>
            </nav>

            <main className="max-w-xl mx-auto">
                {children}
            </main>
        </div>
    );
}
