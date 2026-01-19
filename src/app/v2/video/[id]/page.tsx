'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { videos } from '@/lib/dummyData';
import { YouTubePlayer } from '@/components/YouTubePlayer';
import { Star, ThumbsUp, ThumbsDown, Share2, Plus, Flag, MessageSquare } from 'lucide-react';
import { VideoCard } from '@/components/VideoCard';

export default function XStyleVideoPage() {
    const { id } = useParams();
    const router = useRouter();
    const video = videos.find((v) => v.id === id) || videos[0];

    return (
        <div className="space-y-6">
            <div className="bg-[#000000] p-1 border border-white/5">
                <YouTubePlayer youtubeId={video.youtubeId} className="aspect-video" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-yellow-600 text-[10px] font-black px-1.5 py-0.5 text-white uppercase tracking-tighter shadow-sm shadow-yellow-600/20">Gold</span>
                            <span className="bg-accent2 text-[10px] font-black px-1.5 py-0.5 text-white uppercase tracking-tighter shadow-sm shadow-accent2/20">HD</span>
                        </div>
                        <h1 className="text-2xl font-black tracking-tight leading-tight">{video.title}</h1>
                        <div className="flex items-center justify-between text-sm py-4 border-b border-white/5">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 font-bold">
                                    <ThumbsUp className="w-4 h-4 text-accent2" />
                                    <span>{video.views}</span>
                                </div>
                                <div className="flex items-center gap-2 font-bold text-muted">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>452</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#282828] px-4 py-2 rounded-sm text-xs font-bold transition-colors">
                                    <Share2 className="w-4 h-4" /> Share
                                </button>
                                <button className="flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#282828] px-4 py-2 rounded-sm text-xs font-bold transition-colors">
                                    <Plus className="w-4 h-4" /> Save
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#181818] p-4 rounded-sm border border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-surface border-2 border-accent2 flex items-center justify-center font-black text-xl text-accent2">
                                {video.creatorName[0]}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg hover:text-accent2 transition-colors cursor-pointer">{video.creatorName}</h3>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Premium Content Creator</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-accent2 hover:bg-sky-500 text-white font-bold px-6 py-2.5 rounded-sm transition-all text-sm uppercase tracking-wider">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-sm leading-relaxed text-[#AAAAAA]">
                            {video.title} is an exclusive feature only on xStream. Uploaded {video.uploadedAgo}, this video has gathered {video.views} focused viewers.
                            Join the discussion below and share your thoughts with the community.
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {video.tags.map(tag => (
                                <span key={tag} className="text-[11px] font-bold text-accent2 border border-accent2/20 bg-accent2/5 px-3 py-1 hover:bg-accent2/10 cursor-pointer transition-colors">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-muted border-b border-white/5 pb-2">More Content</h3>
                    <div className="space-y-4">
                        {videos.slice(0, 8).map((v) => (
                            <div key={v.id} className="cursor-pointer group" onClick={() => router.push(`/v2/video/${v.id}`)}>
                                <div className="relative aspect-video bg-surface overflow-hidden group-hover:ring-1 group-hover:ring-accent2 transition-all">
                                    <img src={v.thumbnailUrl} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <span className="absolute bottom-1 right-1 bg-black text-white text-[9px] font-bold px-1">{v.duration}</span>
                                </div>
                                <h4 className="text-[12px] font-bold mt-2 line-clamp-1 group-hover:text-accent2 transition-colors">{v.title}</h4>
                                <div className="flex items-center gap-2 text-[10px] text-muted font-medium">
                                    <span>{v.views}</span>
                                    <span className="text-accent2">98%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
