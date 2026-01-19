'use client';

import React from 'react';
import { videos } from '@/lib/dummyData';
import { VideoCard } from '@/components/VideoCard';
import { useRouter } from 'next/navigation';

export default function PStylePage() {
    const router = useRouter();
    const filters = ["Trending", "Most Recent", "Top Rated", "Most Viewed", "Longest"];

    return (
        <div className="p-4 bg-bg min-h-screen">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    Free Videos <span className="text-muted text-sm font-normal">(1,245,678)</span>
                </h2>
                <div className="hidden md:flex items-center gap-2">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">Sort by:</span>
                    <div className="flex gap-1">
                        {filters.map((f) => (
                            <button key={f} className={`px-3 py-1 text-[11px] font-bold border border-white/10 rounded-sm hover:bg-neutral-800 transition-colors ${f === 'Trending' ? 'bg-neutral-800 text-accent' : 'text-muted'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        variant="p-style"
                        onClick={() => router.push(`/v1/video/${video.id}`)}
                    />
                ))}
                {/* Multiplying videos to fill the grid */}
                {videos.map((video) => (
                    <VideoCard
                        key={`${video.id}-2`}
                        video={video}
                        variant="p-style"
                        onClick={() => router.push(`/v1/video/${video.id}`)}
                    />
                ))}
            </div>
        </div>
    );
}
