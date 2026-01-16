'use client';

import React from 'react';
import { videos } from '@/lib/dummyData';
import { VideoCard } from '@/components/VideoCard';
import { useRouter } from 'next/navigation';

export default function VelocityPage() {
    const router = useRouter();
    const filters = ["All", "Trending", "Gaming", "Music", "Live", "Tech", "Food", "Travel", "Nature", "Future"];

    return (
        <div className="p-4 sm:p-6 max-w-[1800px] mx-auto space-y-6">
            {/* Filters Row */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filter === 'All'
                                ? 'bg-text text-bg'
                                : 'bg-surface border border-border hover:border-accent'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        variant="grid"
                        onClick={() => router.push(`/v1/video/${video.id}`)}
                    />
                ))}
                {/* Multiplying videos to fill the grid */}
                {videos.map((video) => (
                    <VideoCard
                        key={`${video.id}-2`}
                        video={video}
                        variant="grid"
                        onClick={() => router.push(`/v1/video/${video.id}`)}
                    />
                ))}
            </div>
        </div>
    );
}
