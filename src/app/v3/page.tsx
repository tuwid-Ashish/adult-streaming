'use client';

import React from 'react';
import { videos } from '@/lib/dummyData';
import { VideoCard } from '@/components/VideoCard';
import { Play, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CinemaPage() {
    const router = useRouter();
    const heroVideo = videos[2]; // AI video as hero

    return (
        <div className="space-y-12 pb-20">
            {/* Hero Banner */}
            <section className="relative h-[85vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src={`https://img.youtube.com/vi/${heroVideo.youtubeId}/maxresdefault.jpg`}
                        className="w-full h-full object-cover"
                        alt={heroVideo.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20 space-y-6 max-w-3xl">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 border border-accent text-accent text-[10px] font-bold tracking-widest uppercase">Premium</span>
                        <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-80">Original Series</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                        {heroVideo.title.split(' - ')[0]}
                    </h1>
                    <p className="text-xl text-white/70 line-clamp-3">
                        Dive into the incredible world of {heroVideo.title}. A groundbreaking exploration that redefines everything you know.
                    </p>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => router.push(`/v3/video/${heroVideo.id}`)}
                            className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded font-bold hover:bg-white/90 transition-all uppercase tracking-wider"
                        >
                            <Play className="w-5 h-5 fill-black" /> Play Now
                        </button>
                        <button
                            onClick={() => router.push(`/v3/video/${heroVideo.id}`)}
                            className="flex items-center gap-3 px-8 py-3 bg-white/20 text-white rounded font-bold hover:bg-white/30 backdrop-blur-md transition-all uppercase tracking-wider"
                        >
                            <Info className="w-5 h-5" /> More Info
                        </button>
                    </div>
                </div>
            </section>

            {/* Carousels */}
            <div className="space-y-12 px-12 md:px-20 -mt-32 relative z-10">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
                    <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
                        {videos.map((v) => (
                            <VideoCard
                                key={v.id}
                                video={v}
                                variant="cinema"
                                onClick={() => router.push(`/v3/video/${v.id}`)}
                            />
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Staff Picks</h2>
                    <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
                        {[...videos].reverse().map((v) => (
                            <VideoCard
                                key={`${v.id}-picks`}
                                video={v}
                                variant="cinema"
                                onClick={() => router.push(`/v3/video/${v.id}`)}
                            />
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Continue Watching</h2>
                    <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
                        {videos.slice(4, 10).map((v) => (
                            <VideoCard
                                key={`${v.id}-cont`}
                                video={v}
                                variant="cinema"
                                onClick={() => router.push(`/v3/video/${v.id}`)}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
