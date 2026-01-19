'use client';

import React from 'react';
import { Video } from '@/lib/types';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface VideoCardProps {
    video: Video;
    variant?: 'p-style' | 'x-style' | 'cinema';
    onClick?: () => void;
}

export function VideoCard({ video, variant = 'p-style', onClick }: VideoCardProps) {
    // P-Style: Pornhub Inspired
    if (variant === 'p-style') {
        return (
            <div
                onClick={onClick}
                className="flex flex-col gap-2 group cursor-pointer w-full"
            >
                <div className="relative aspect-video rounded-md overflow-hidden bg-surface border border-transparent group-hover:border-accent transition-all duration-200">
                    <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-1.5 right-1.5 bg-black/90 text-white text-[10px] font-black px-1 py-0.5 rounded-sm">
                        {video.duration}
                    </span>
                </div>
                <div className="flex flex-col gap-1 px-0.5">
                    <h3 className="text-text font-bold text-[13px] line-clamp-2 leading-[1.3] group-hover:text-accent group-hover:underline transition-colors decoration-accent">
                        {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-muted font-medium">
                        <span className="hover:text-text">{video.creatorName}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-accent2">{video.views}</span>
                            <span className="text-green-500">95%</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // X-Style: xHamster Inspired
    if (variant === 'x-style') {
        return (
            <div
                onClick={onClick}
                className="flex flex-col gap-2 group cursor-pointer w-full border border-transparent hover:bg-surface/50 p-1 transition-colors"
            >
                <div className="relative aspect-video overflow-hidden bg-surface">
                    <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1 py-0.5">
                        {video.duration}
                    </span>
                    <div className="absolute top-1 left-1 flex gap-1">
                        <span className="bg-accent2/90 text-white text-[9px] font-bold px-1 py-0.5 uppercase">HD</span>
                        <span className="bg-yellow-600/90 text-white text-[9px] font-bold px-1 py-0.5 uppercase">4K</span>
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-text font-semibold text-[13px] line-clamp-1 group-hover:text-accent2 transition-colors">
                        {video.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-muted">
                        <span className="font-bold text-accent">{video.views}</span>
                        <span>•</span>
                        <span>{video.uploadedAgo}</span>
                    </div>
                </div>
            </div>
        );
    }

    // Cinema: Netflix Inspired
    if (variant === 'cinema') {
        return (
            <div
                onClick={onClick}
                className="relative aspect-video w-[300px] shrink-0 rounded-lg overflow-hidden cursor-pointer group hover:ring-2 hover:ring-accent transition-all"
            >
                <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center bg-black/50">
                        <Play className="w-6 h-6 text-accent fill-accent ml-1" />
                    </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-white text-sm font-semibold truncate">{video.title}</h4>
                </div>
            </div>
        );
    }

    return null;
}
