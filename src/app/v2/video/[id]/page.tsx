'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { videos } from '@/lib/dummyData';
import { YouTubePlayer } from '@/components/YouTubePlayer';
import { ChevronLeft, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

export default function CircleVideoPage() {
    const { id } = useParams();
    const router = useRouter();
    const video = videos.find((v) => v.id === id) || videos[0];

    return (
        <div className="min-h-screen bg-bg">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md flex items-center gap-4 p-4 border-b border-border sm:hidden">
                <button onClick={() => router.back()} className="p-1">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="font-bold truncate">{video.title}</h2>
            </div>

            <div className="space-y-6 pb-20">
                <YouTubePlayer youtubeId={video.youtubeId} className="rounded-none sm:rounded-2xl" />

                <div className="px-4 space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-black italic uppercase leading-tight">{video.title}</h1>
                        <div className="flex flex-wrap gap-2">
                            {video.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-surface border border-border rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-4 border-y border-border">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-accent2 p-[2px]">
                                <div className="w-full h-full rounded-full border-2 border-bg bg-surface flex items-center justify-center font-bold text-lg">
                                    {video.creatorName[0]}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold">{video.creatorName}</h3>
                                <p className="text-muted text-xs">854K followers</p>
                            </div>
                        </div>
                        <button className="bg-accent text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-accent/20 active:scale-95 transition-all">
                            Follow
                        </button>
                    </div>

                    <div className="flex items-center justify-around py-2">
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="p-3 rounded-full bg-surface group-hover:bg-accent/10 transition-colors">
                                <Heart className="w-6 h-6 group-hover:text-accent group-hover:fill-accent" />
                            </div>
                            <span className="text-[10px] font-bold">12K</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="p-3 rounded-full bg-surface group-hover:bg-accent2/10 transition-colors">
                                <MessageCircle className="w-6 h-6 group-hover:text-accent2" />
                            </div>
                            <span className="text-[10px] font-bold">452</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="p-3 rounded-full bg-surface group-hover:bg-accent/10 transition-colors">
                                <Share2 className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-bold">Share</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="p-3 rounded-full bg-surface group-hover:bg-accent2/10 transition-colors">
                                <Bookmark className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-bold">Save</span>
                        </button>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Related Circles</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {videos.filter(v => v.id !== id).slice(0, 4).map(v => (
                                <div key={v.id} className="group cursor-pointer" onClick={() => router.push(`/v2/video/${v.id}`)}>
                                    <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-border relative">
                                        <img src={v.thumbnailUrl} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                                        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
                                            <p className="text-white text-[10px] font-bold line-clamp-2">{v.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
