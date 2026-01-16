'use client';

import React from 'react';
import { Video } from '@/lib/types';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface VideoCardProps {
    video: Video;
    variant?: 'grid' | 'circle' | 'cinema';
    onClick?: () => void;
}

export function VideoCard({ video, variant = 'grid', onClick }: VideoCardProps) {
    if (variant === 'circle') {
        return (
            <div
                onClick={onClick}
                className="flex flex-col gap-3 group cursor-pointer"
            >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-surface border border-border">
                    <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg line-clamp-2">{video.title}</h3>
                        <p className="text-white/70 text-sm mt-1">{video.creatorName}</p>
                    </div>
                </div>
            </div>
        );
    }

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

    return (
        <div
            onClick={onClick}
            className="flex flex-col gap-3 group cursor-pointer"
        >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-border">
                <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {video.duration}
                </span>
            </div>
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center font-bold text-accent">
                    {video.creatorName[0]}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <h3 className="text-text font-semibold text-sm line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                        {video.title}
                    </h3>
                    <p className="text-muted text-xs mt-1">{video.creatorName}</p>
                    <p className="text-muted text-[10px] mt-0.5">
                        {video.views} views • {video.uploadedAgo}
                    </p>
                </div>
            </div>
        </div>
    );
}
