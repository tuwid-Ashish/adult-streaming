'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { videos } from '@/lib/dummyData';
import { YouTubePlayer } from '@/components/YouTubePlayer';
import { VideoCard } from '@/components/VideoCard';
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, Flag } from 'lucide-react';

export default function PStyleVideoPage() {
    const { id } = useParams();
    const router = useRouter();
    const video = videos.find((v) => v.id === id) || videos[0];

    return (
        <div className="p-4 bg-[#000000] min-h-screen">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    <div className="bg-[#1b1b1b] p-1 shadow-2xl">
                        <YouTubePlayer youtubeId={video.youtubeId} className="rounded-none border border-white/5" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight">{video.title}</h1>

                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center font-black text-black text-xl">
                                    {video.creatorName[0]}
                                </div>
                                <div>
                                    <p className="font-bold hover:text-accent cursor-pointer transition-colors">{video.creatorName}</p>
                                    <p className="text-muted text-[11px] font-bold uppercase tracking-wider">Verified Creator</p>
                                </div>
                                <button className="ml-4 px-6 py-2 bg-accent text-black font-black rounded-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all">
                                    + Favorite
                                </button>
                            </div>

                            <div className="flex items-center gap-1">
                                <button className="flex items-center gap-2 px-6 py-2 bg-[#282828] hover:bg-[#333333] transition-colors rounded-sm">
                                    <ThumbsUp className="w-4 h-4 text-green-500" />
                                    <span className="text-sm font-bold">95%</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#282828] hover:bg-[#333333] transition-colors rounded-sm">
                                    <Share2 className="w-4 h-4 text-muted" />
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#282828] hover:bg-[#333333] transition-colors rounded-sm">
                                    <MoreHorizontal className="w-4 h-4 text-muted" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8">
                            <div className="space-y-4">
                                <div className="text-sm text-white/80 leading-relaxed">
                                    Released on {video.uploadedAgo} by {video.creatorName}. This premium content features the best of {video.tags.join(', ')}.
                                    Expertly curated for the StreamBox community.
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {video.tags.map(tag => (
                                        <span key={tag} className="text-accent text-[11px] font-bold uppercase tracking-widest hover:underline cursor-pointer">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#1b1b1b] border border-white/5 p-4 space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span className="text-muted">Views:</span>
                                    <span className="font-bold">{video.views}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-muted">Duration:</span>
                                    <span className="font-bold">{video.duration}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-muted">Rating:</span>
                                    <span className="font-bold text-green-500">95% (45K votes)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-[350px] flex-shrink-0 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <h3 className="font-black text-sm uppercase tracking-widest">Up Next</h3>
                        <span className="text-[10px] font-bold text-accent cursor-pointer">Autoplay ON</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        {videos.map((v) => (
                            <div key={v.id} className="flex gap-3 group cursor-pointer" onClick={() => router.push(`/v1/video/${v.id}`)}>
                                <div className="relative aspect-video w-36 rounded-sm overflow-hidden flex-shrink-0 bg-surface border border-transparent group-hover:border-accent transition-all duration-200">
                                    <img src={v.thumbnailUrl} alt={v.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" />
                                    <span className="absolute bottom-1 right-1 bg-black/90 text-white text-[9px] font-black px-1 rounded-sm">{v.duration}</span>
                                </div>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <h4 className="text-[12px] font-bold line-clamp-2 leading-tight group-hover:text-accent transition-colors">{v.title}</h4>
                                    <p className="text-muted text-[10px] font-medium hover:text-white transition-colors">{v.creatorName}</p>
                                    <div className="flex items-center gap-2 text-[9px] font-bold text-muted">
                                        <span>{v.views} views</span>
                                        <span className="text-green-500">95%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
