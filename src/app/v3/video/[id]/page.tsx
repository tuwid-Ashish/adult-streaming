'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { videos } from '@/lib/dummyData';
import { YouTubePlayer } from '@/components/YouTubePlayer';
import { X, Play, Plus, ThumbsUp, Volume2, Maximize2 } from 'lucide-react';

export default function CinemaVideoPage() {
    const { id } = useParams();
    const router = useRouter();
    const video = videos.find((v) => v.id === id) || videos[0];

    return (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in duration-300">
            <div className="bg-surface w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-white/10 relative group">

                {/* Close Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-all border border-white/20"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col">
                    {/* Player Region */}
                    <div className="relative aspect-video w-full">
                        <YouTubePlayer youtubeId={video.youtubeId} className="rounded-none h-full" />
                    </div>

                    {/* Info Region */}
                    <div className="p-8 grid md:grid-cols-[1fr_300px] gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-accent font-bold">2024</span>
                                <span className="px-2 py-0.5 border border-white/30 text-[10px] font-bold">18+</span>
                                <span className="text-sm font-medium">{video.duration}</span>
                                <span className="px-1.5 py-0.5 border border-white/30 text-[8px] font-black rounded">UHD</span>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight">{video.title}</h1>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Experience the highly acclaimed "{video.title}" exclusively on Cinema.
                                Follow {video.creatorName} as they take you on a journey through {video.tags.join(', ')}.
                                Multiple award winner in cinematography and storytelling.
                            </p>

                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded hover:bg-white/80 transition-colors">
                                    <Play className="w-5 h-5 fill-black" /> Resume
                                </button>
                                <button className="p-2 border border-white/40 rounded-full hover:border-white transition-colors">
                                    <Plus className="w-6 h-6" />
                                </button>
                                <button className="p-2 border border-white/40 rounded-full hover:border-white transition-colors">
                                    <ThumbsUp className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6 text-sm">
                            <div>
                                <span className="text-muted">Cast:</span> {video.creatorName}, Top Experts, Visionaries
                            </div>
                            <div>
                                <span className="text-muted">Genres:</span> {video.tags.join(', ')}
                            </div>
                            <div>
                                <span className="text-muted">This video is:</span> Immersive, Emotional, Cinematic
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <h4 className="font-bold mb-4">More Like This</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {videos.filter(v => v.id !== id).slice(0, 4).map(v => (
                                        <div key={v.id} className="aspect-video rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-accent transition-all" onClick={() => router.push(`/v3/video/${v.id}`)}>
                                            <img src={v.thumbnailUrl} className="w-full h-full object-cover" alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
