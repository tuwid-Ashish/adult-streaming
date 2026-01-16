'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { videos } from '@/lib/dummyData';
import { YouTubePlayer } from '@/components/YouTubePlayer';
import { VideoCard } from '@/components/VideoCard';
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, Flag } from 'lucide-react';

export default function VelocityVideoPage() {
    const { id } = useParams();
    const video = videos.find((v) => v.id === id) || videos[0];

    return (
        <div className="p-4 sm:p-6 max-w-[1800px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content */}
                <div className="flex-1 space-y-4">
                    <YouTubePlayer youtubeId={video.youtubeId} />

                    <div className="space-y-4">
                        <h1 className="text-xl sm:text-2xl font-bold line-clamp-2">{video.title}</h1>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-lg">
                                    {video.creatorName[0]}
                                </div>
                                <div>
                                    <p className="font-bold">{video.creatorName}</p>
                                    <p className="text-muted text-xs">1.2M subscribers</p>
                                </div>
                                <button className="ml-4 px-5 py-2 bg-text text-bg font-bold rounded-full text-sm hover:opacity-90">
                                    Subscribe
                                </button>
                            </div>

                            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                                <div className="flex items-center bg-surface border border-border rounded-full h-10 overflow-hidden">
                                    <button className="flex items-center gap-2 px-4 hover:bg-bg/50 border-r border-border transition-colors">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="text-sm font-medium">45K</span>
                                    </button>
                                    <button className="flex items-center px-4 hover:bg-bg/50 transition-colors">
                                        <ThumbsDown className="w-4 h-4" />
                                    </button>
                                </div>
                                <button className="flex items-center gap-2 px-4 h-10 bg-surface border border-border rounded-full hover:bg-bg/50 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    <span className="text-sm font-medium">Share</span>
                                </button>
                                <button className="flex items-center px-3 h-10 bg-surface border border-border rounded-full hover:bg-bg/50 transition-colors">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-surface rounded-xl p-4 space-y-2">
                            <div className="flex gap-4 text-sm font-bold">
                                <span>{video.views} views</span>
                                <span>{video.uploadedAgo}</span>
                            </div>
                            <p className="text-sm">
                                This is a dummy description for "{video.title}". Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {video.tags.map(tag => (
                                    <span key={tag} className="text-accent2 text-sm font-medium">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-[400px] flex-shrink-0 space-y-4">
                    <h3 className="font-bold text-lg mb-2">Related Videos</h3>
                    {videos.map((v) => (
                        <div key={v.id} className="flex gap-3 group cursor-pointer" onClick={() => window.location.href = `/v1/video/${v.id}`}>
                            <div className="relative aspect-video w-40 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
                                <img src={v.thumbnailUrl} alt={v.title} className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">{v.duration}</span>
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <h4 className="text-sm font-semibold line-clamp-2 leading-tight group-hover:text-accent transition-colors">{v.title}</h4>
                                <p className="text-muted text-xs">{v.creatorName}</p>
                                <p className="text-muted text-[10px]">{v.views} views • {v.uploadedAgo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
