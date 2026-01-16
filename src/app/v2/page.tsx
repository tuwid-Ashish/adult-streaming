'use client';

import React from 'react';
import { videos } from '@/lib/dummyData';
import { VideoCard } from '@/components/VideoCard';
import { useRouter } from 'next/navigation';

export default function CirclePage() {
    const router = useRouter();

    return (
        <div className="py-6 px-4 space-y-8">
            {/* Stories Row */}
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {videos.slice(0, 8).map((v) => (
                    <div key={v.id} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full p-[3px] bg-gradient-to-tr from-accent to-accent2 shadow-lg cursor-pointer transition-transform active:scale-90">
                            <div className="w-full h-full rounded-full border-2 border-bg overflow-hidden bg-surface">
                                <img src={v.thumbnailUrl} className="w-full h-full object-cover" alt="" />
                            </div>
                        </div>
                        <span className="text-[10px] font-medium w-16 truncate text-center">
                            {v.creatorName}
                        </span>
                    </div>
                ))}
            </div>

            {/* Feed */}
            <div className="space-y-12">
                {videos.map((video) => (
                    <div key={video.id} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                                    {video.creatorName[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm leading-none">{video.creatorName}</h4>
                                    <p className="text-muted text-[10px] mt-1">Suggested for you</p>
                                </div>
                            </div>
                            <button className="text-accent2 text-sm font-bold bg-accent2/10 px-4 py-1.5 rounded-full hover:bg-accent2/20 transition-colors">
                                Follow
                            </button>
                        </div>

                        <VideoCard
                            video={video}
                            variant="grid" // Using grid variant but in a column layout
                            onClick={() => router.push(`/v2/video/${video.id}`)}
                        />

                        <div className="flex items-center gap-6 px-2">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-sm">{video.views}</span>
                                <span className="text-muted text-sm">views</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-sm">{video.uploadedAgo}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
