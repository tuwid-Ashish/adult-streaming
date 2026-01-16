'use client';

import React from 'react';
import { Search, Bell, User, Clapperboard } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';

export default function CinemaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Cinema Nav */}
            <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/80 to-transparent h-20 px-6 sm:px-12 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2">
                        <Clapperboard className="w-8 h-8 text-accent" />
                        <span className="font-bold text-2xl tracking-[0.2em] uppercase text-accent font-serif">Cinema</span>
                    </Link>
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted hover:text-white transition-colors">
                        <Link href="/v3" className="text-white">Home</Link>
                        <Link href="/v3" className="hover:text-white">TV Shows</Link>
                        <Link href="/v3" className="hover:text-white">Movies</Link>
                        <Link href="/v3" className="hover:text-white">New & Popular</Link>
                        <Link href="/v3" className="hover:text-white">My List</Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="hover:text-accent transition-colors"> <Search className="w-5 h-5" /> </button>
                    <button className="hover:text-accent transition-colors"> <Bell className="w-5 h-5" /> </button>
                    <ThemeSwitcher version="v3" />
                    <button className="w-8 h-8 rounded bg-accent/20 border border-accent/40 flex items-center justify-center">
                        <User className="w-5 h-5 text-accent" />
                    </button>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer className="py-20 px-12 border-t border-white/10 text-muted opacity-50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-3 text-sm">
                        <a href="#">Audio Description</a>
                        <a href="#">Help Center</a>
                        <a href="#">Gift Cards</a>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <a href="#">Media Center</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Jobs</a>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <a href="#">Corporate Information</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="mt-12 text-xs text-center uppercase tracking-widest">
                    © 2024 Cinema Premium OTT
                </div>
            </footer>
        </div>
    );
}
