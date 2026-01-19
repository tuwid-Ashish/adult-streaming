'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { videos } from '@/lib/dummyData';
import { VideoCard } from '@/components/VideoCard';
import { useRouter } from 'next/navigation';

export default function XStylePage() {
    const router = useRouter();
    const subFilters = ["Recent", "Most Viewed", "Top Rated", "Trending", "Longest"];

    return (
        <div className="space-y-8">
            {/* Sub-nav row */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
                    {subFilters.map((f) => (
                        <button key={f} className={`transition-colors ${f === 'Recent' ? 'text-accent2 border-b-2 border-accent2 h-[40px] px-1' : 'text-muted hover:text-white'}`}>
                            {f}
                        </button>
                    ))}
                </div>
                <div className="text-[11px] font-bold text-muted hidden sm:block">
                    Displaying 24 of 1,452 videos
                </div>
            </div>

            {/* Dense Wall of Content */}
            <section className="space-y-12">
                <div>
                    <h2 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                        <Play className="w-5 h-5 text-accent" /> Featured Videos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                        {videos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                variant="x-style"
                                onClick={() => router.push(`/v2/video/${video.id}`)}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                        <Play className="w-5 h-5 text-accent" /> Recommended for You
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                        {[...videos].reverse().map((video) => (
                            <VideoCard
                                key={`${video.id}-rev`}
                                video={video}
                                variant="x-style"
                                onClick={() => router.push(`/v2/video/${video.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
